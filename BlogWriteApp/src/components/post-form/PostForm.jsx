import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import storage from "../../appwrite/storage";
import service from "../../appwrite/config";
import Input from "../Header/Input";
import Button from "../Button/Button";
import Select from "../Header/Select";
import RTE from "../RTE";

function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);


  const editpost = async(data) => {

      const file = data.image[0]
        ? await storage.uploadFile(data.image[0])
        : null;
      if (file) {
        storage.deleteFile(post.featuredimage);
      }
      const dbPost = await service.updatePost(post.$id, {
        ...data,
        featuredimage: file ? file.$id : undefined,
      });
      console.log(dbPost);
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
  }

  const addPost = async (data) => {
    console.log("addPost")
      const file = await storage.uploadFile(data.image[0]);
      if (file) {
        const fileId = file.$id;
        data.featuredimage = fileId;
        console.log(fileId);
        const dbPost = await service.createPost({
          ...data,
          userId: userData.$id,
        });
        console.log({ ...data });
        console.log(dbPost);
        console.log(userData.$id);

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
      
    
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");
    }
    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <>
      <form onSubmit={handleSubmit(post?editpost:addPost)} className="flex flex-wrap">
        <div className="w-2/3 px-2">
          <Input
            label="Title :"
            placeholder="Title"
            className="mb-4"
            {...register("title", { required: true })}
          />
          <Input
            label="Slug :"
            placeholder="Slug"
            className="mb-4"
            {...register("slug", { required: true })}
            onInput={(e) => {
              setValue("slug", slugTransform(e.currentTarget.value), {
                shouldValidate: true,
              });
            }}
          />
          <RTE
            label="Content :"
            name="content"
            control={control}
            defaultValue={getValues("content")}
          />
        </div>
        <div className="w-1/3 px-2">
          <Input
            label="Featured Image :"
            type="file"
            className="mb-4"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: true })}
          />
          {post && (
            <div className="w-full mb-4">
              <img
                src={storage.getFilePreview(post.featuredimage)}
                alt={post.title}
                className="rounded-lg"
              />
            </div>
          )}
          <Select
            option={["active", "inactive"]}
            label="Status"
            className="mb-4"
            {...register("status", { required: true })}
          />
          <Button
            type="submit"
            bgColor={post ? "bg-green-500" : undefined}
            className="w-full"
          >
            {post ? "Update" : "Submit"}
          </Button>
        </div>
      </form>
    </>
  );
}

export default PostForm;
