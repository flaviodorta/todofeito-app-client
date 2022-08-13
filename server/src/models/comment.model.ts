import { prop, getModelForClass } from '@typegoose/typegoose';

import { userId } from '../types/user.types';

export class CommentModel {
  @prop({ required: true })
  public commentId: string;

  @prop({ required: true })
  public createdBy: userId;

  @prop({ required: true })
  public content: string;

  @prop({ required: true })
  public date: Date;
}

export const commentModel = getModelForClass(CommentModel);
