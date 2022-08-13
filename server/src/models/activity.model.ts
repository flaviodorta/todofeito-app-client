import { prop, getModelForClass } from '@typegoose/typegoose';

import { userId } from '../types/user.types';

export class ActivityModel {
  @prop({ required: true })
  public activityId: string;

  @prop({ required: true })
  public createdBy: userId;

  @prop({ required: true })
  public content: string;

  @prop({ required: true })
  public date: Date;
}

export const activityModel = getModelForClass(ActivityModel);
