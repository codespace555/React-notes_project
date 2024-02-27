import React from 'react'

export default function Github() {
  return (
    <div>
      polu
    </div>
  )
}

export  async function getGithubProps(context) {
   const res = await fetch('https://api.github.com/users/codespace555')
   const data = await res.json();

}