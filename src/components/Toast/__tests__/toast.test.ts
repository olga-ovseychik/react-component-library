import { toastsStore } from "../store";
import { toast } from "../toast";
const message = 'test'

const addToastMock = jest.spyOn(toastsStore, 'addToast')
const removeToastMock = jest.spyOn(toastsStore, 'removeToast')

describe("toast object", () => {
  test("should call addToast with success type", () => {
    toast.success(message);

    expect(addToastMock).toHaveBeenCalledWith({
      message,
      type: 'success',
      id: expect.any(Number),
    })
  })

  test("should call addToast with error type", () => {
    toast.error(message);

    expect(addToastMock).toHaveBeenCalledWith({
      message,
      type: 'error',
      id: expect.any(Number),
    })
  })

  test("should call addToast with info type", () => {
    toast.info(message);

    expect(addToastMock).toHaveBeenCalledWith({
      message,
      type: 'info',
      id: expect.any(Number),
    })
  })

  test("should call addToast with warning type", () => {
    toast.warning(message);

    expect(addToastMock).toHaveBeenCalledWith({
      message,
      type: 'warning',
      id: expect.any(Number),
    })
  })

  test("should call removeToast with correct id", () => {
    toast.dismiss(1)
    expect(removeToastMock).toHaveBeenCalledWith(1)
  })
})