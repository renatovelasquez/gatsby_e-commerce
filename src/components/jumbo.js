import React from "react"
import { StyledJumbo } from "../styles/components"
import { Image } from "./"

export default function jumbo({ description }) {
  return (
    <StyledJumbo>
      <div>
        <h2>Consigue todo lo que quieras!!!</h2>
        <small>{description}</small>
      </div>
      <Image name="icon"></Image>
    </StyledJumbo>
  )
}
