import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

enum media {
  video = "video",
  photo = "photo",
}

@Entity()
export class Link {
  @PrimaryGeneratedColumn()
  linkId: number

  @Column("text")
  linkType: media.photo | media.video

  @Column("text")
  URL: string

  @Column("text")
  title: string

  @Column("text")
  addDate: string

  @Column("text")
  publicationDate: string

  @Column("text")
  thumbnail: string

  @Column("text")
  height: number

  @Column("text")
  width: number

  @Column("text")
  duration: number
}
