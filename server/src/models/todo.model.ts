import { prop, getModelForClass } from '@typegoose/typegoose';

import { projectId } from '../types/project.types';
import { userId } from '../types/user.types';
import { CommentModel } from './comment.model';

export class TodoModel {
  @prop({ required: true })
  public todoId: string;

  @prop({ required: true })
  public createdBy: userId;

  @prop({ required: true })
  public name: string;

  @prop({ required: true })
  public content: string;

  @prop({ required: true })
  public date: Date;

  @prop({ required: true })
  public isCompleted: boolean;

  @prop({ type: () => [CommentModel] })
  public comments?: CommentModel[];

  @prop()
  public priority?: 1 | 2 | 3 | 4;

  @prop({ type: () => [String] })
  public sharingUsers?: userId[];

  @prop({ type: () => [String] })
  public labels?: string[];

  @prop()
  public reminder?: Date;

  @prop()
  public project?: projectId;
}

export const todoModel = getModelForClass(TodoModel);
