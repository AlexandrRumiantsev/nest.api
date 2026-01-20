import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PostCourses{
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  content: string;

  @Column()
  author: string;

  @Column()
  chapter: string;

  @Column()
  title: string;

}