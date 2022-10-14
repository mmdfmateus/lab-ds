import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputRootProps {
  children: ReactNode
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div
      className='flex items-center gap-3 py-4 px-3 rounded bg-gray-800 focus-within:ring-2 ring-gray-400 h-12'
    >
      {children}
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root';

interface TextInputIconProps {
  children: ReactNode
}

function TextInputIcon({children}: TextInputIconProps) {
  return (
    <Slot
      className="w-6 h-6 text-gray-400"
    >
      {children}
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon';

interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input 
      className='bg-transparent flex-1 text-gray-100 text-xs w-full placeholder:text-gray-400 font-sans outline-none'
        {...props}
    />
  )
}

TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
  Input: TextInputInput,
  Root: TextInputRoot,
  Icon: TextInputIcon
}