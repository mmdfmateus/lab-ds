import { Meta, StoryObj} from '@storybook/react'
import { Text, TextProps } from "./Text";

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Text default (medium)'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    },
  }
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {
  args: {
    size: 'md',
    children: 'Text default (medium)'
  }
}

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm',
    children: 'Text small'
  }
}

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg',
    children: 'Text large'
  }
}

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Text with p</p>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}