import { screen, render } from "@testing-library/react";
import { Accordion } from "../Accordion";
import { mockData } from "./mockData";
import { SingleModeArgs, MultipleModeArgs } from "./types";


const mockUncontrolledSingleModeProps: SingleModeArgs = {
  mode: 'single',
  defaultValue: mockData[0].id
}

const mockUncontrolledMultipleModeProps: MultipleModeArgs = {
  mode: 'multiple',
  defaultValue: [mockData[0].id],
}

const mockControlledSingleModeProps: SingleModeArgs = {
  mode: 'single',
  value: mockData[0].id,
  onChange: jest.fn(),
}

const mockControlledMultipleModeProps: MultipleModeArgs = {
  mode: 'multiple',
  value: [mockData[0].id],
  onChange: jest.fn(),
}

describe("Accordion Component", () => {
  test("should render correctly uncontrolled component in single mode", () => {
    render(
      <Accordion {...mockUncontrolledSingleModeProps}>
        <Accordion.Item id={mockData[0].id}>
          <Accordion.Title>{mockData[0].title}</Accordion.Title>
          <Accordion.Content>{mockData[0].content}</Accordion.Content>
        </Accordion.Item>

        <Accordion.Item id={mockData[1].id}>
          <Accordion.Title>{mockData[1].title}</Accordion.Title>
          <Accordion.Content>{mockData[1].content}</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );

    expect(screen.getByText(mockData[0].title)).toBeInTheDocument();
    expect(screen.getByText(mockData[0].content)).toBeInTheDocument();
  });

  test("should render correctly uncontrolled component in multiple mode", () => {
    render(
      <Accordion {...mockUncontrolledMultipleModeProps}>
        <Accordion.Item id={mockData[0].id}>
          <Accordion.Title>{mockData[0].title}</Accordion.Title>
          <Accordion.Content>{mockData[0].content}</Accordion.Content>
        </Accordion.Item>

        <Accordion.Item id={mockData[1].id}>
          <Accordion.Title>{mockData[1].title}</Accordion.Title>
          <Accordion.Content>{mockData[1].content}</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );

    expect(screen.getByText(mockData[0].title)).toBeInTheDocument();
    expect(screen.getByText(mockData[0].content)).toBeInTheDocument();
  });

  test("should render correctly controlled component in single mode", () => {
    render(
      <Accordion {...mockControlledSingleModeProps}>
        <Accordion.Item id={mockData[0].id}>
          <Accordion.Title>{mockData[0].title}</Accordion.Title>
          <Accordion.Content>{mockData[0].content}</Accordion.Content>
        </Accordion.Item>

        <Accordion.Item id={mockData[1].id}>
          <Accordion.Title>{mockData[1].title}</Accordion.Title>
          <Accordion.Content>{mockData[1].content}</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );

    expect(screen.getByText(mockData[0].title)).toBeInTheDocument();
    expect(screen.getByText(mockData[0].content)).toBeInTheDocument();
  });

  test("should render correctly controlled component in multiple mode", () => {
    render(
      <Accordion {...mockControlledMultipleModeProps}>
        <Accordion.Item id={mockData[0].id}>
          <Accordion.Title>{mockData[0].title}</Accordion.Title>
          <Accordion.Content>{mockData[0].content}</Accordion.Content>
        </Accordion.Item>

        <Accordion.Item id={mockData[1].id}>
          <Accordion.Title>{mockData[1].title}</Accordion.Title>
          <Accordion.Content>{mockData[1].content}</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );

    expect(screen.getByText(mockData[0].title)).toBeInTheDocument();
    expect(screen.getByText(mockData[0].content)).toBeInTheDocument();
  });
});
