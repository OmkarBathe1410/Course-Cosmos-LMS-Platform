import mongoose, { Document, Model, Schema, model } from "mongoose";

interface IFaqItem extends Document {
  question: string;
  answer: string;
}

interface ICategory extends Document {
  title: string;
}

interface ILayout extends Document {
  type: string;
  faq: IFaqItem[];
  categories: ICategory[];
}

const faqSchema = new Schema<IFaqItem>({
  question: {
    type: String,
  },
  answer: {
    type: String,
  },
});

const categorySchema = new Schema<ICategory>({
  title: {
    type: String,
  },
});

const layoutSchema = new Schema<ILayout>({
  type: {
    type: String,
  },
  faq: [faqSchema],
  categories: [categorySchema],
});

const LayoutModel: Model<ILayout> = mongoose.model("Layout", layoutSchema);

export default LayoutModel;
