import { ToastContainer } from "../ToastContainer";
import { toastsStore } from "../store";
import { toast } from "../toast";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toast } from "../types";


const renderToast = ((item: Toast) => {
  const colors = {
    info: "#3b82f6",
    success: "#22c55e",
    warning: "#f59e0b",
    error: "#ef4444",
  };

  return (
    <div
      style={{
        background: colors[item.type],
        width: "10%",
        color: "black",
        padding: "12px 16px",
        borderRadius: 8,
        marginBottom: 8,
        display: "flex",
        justifyContent: "space-between",
        gap: 12,
      }}
    >
      <span>{item.message}</span>
      <button onClick={() => toast.dismiss(item.id)}>✕</button>
    </div>
  )
});

const meta = {
  title: "Components/Toast",
  component: ToastContainer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  beforeEach() {
    toastsStore.reset();
  },
} satisfies Meta<typeof ToastContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    renderToast
  }
}

export const SingleToast: Story = {
  async beforeEach() {
    toast.info('test')
  },
  args: {
    renderToast
  }
}

export const MultipleToasts: Story = {
  async beforeEach() {
    toast.info('test')
    toast.info('test')
  },
  args: {
    renderToast
  }
}

export const ToastTypes: Story = {
  async beforeEach() {
    toast.success('success')
    toast.error('error')
    toast.info('info')
    toast.warning('warning')
  },
  args: {
    renderToast
  }
}