import { JsonProperty, Serializable } from 'typescript-json-serializer';

@Serializable()
export class Comment {
  @JsonProperty() postId?: number;
  @JsonProperty() id?: number;
  @JsonProperty() name: string;
  @JsonProperty() email: string;
  @JsonProperty() body: string;

  constructor(comment: Comment) {
    Object.assign(this, comment);
  }
}
