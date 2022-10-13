import { Meta, StoryObj} from '@storybook/react'
import { Heading, HeadingProps } from "./Heading";

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    },
  }
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {
  args: {
    size: 'md',
    children: 'Heading default (medium)'
  }
}

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: 'sm',
    children: 'Heading small'
  }
}

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: 'lg',
    children: 'Heading large'
  }
}

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (
      <h1>Heading with h1</h1>
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