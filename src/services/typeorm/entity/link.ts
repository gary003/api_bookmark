import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Link {
  @PrimaryGeneratedColumn()
  linkId: number

  @Column("text")
  linkType: string

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
