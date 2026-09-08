import { ToastContainer } from "../ToastContainer";
import { useToastsStore } from "../useToastsStore";
import { mockToast } from "./mock-data";
import { screen, render} from "@testing-library/react";
import { Toast } from "../types";
import { toastsStore } from "../store";

jest.mock('../useToastsStore')

const renderToast = jest.fn((toast: Toast) => <span>{toast.message}</span>);

describe('ToastContainer', () => {
  beforeEach(() => {
    toastsStore.reset()
    jest.clearAllMocks()
  })

  test('should call renderToast with the correct toast', () => {
    (useToastsStore as jest.Mock).mockReturnValue([mockToast]);
    render(<ToastContainer renderToast={renderToast}/>)

    expect(screen.getByTestId(`toast-${mockToast.id}`)).toBeInTheDocument();
    expect(renderToast).toHaveBeenCalledWith(mockToast);
  })

  test('should render nothing when store is empty', () => {
    (useToastsStore as jest.Mock).mockReturnValue([]);
    render(<ToastContainer renderToast={renderToast}/>)

    expect(renderToast).not.toHaveBeenCalled();
  })
})