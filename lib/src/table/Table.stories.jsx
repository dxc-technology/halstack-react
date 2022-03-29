import React from "react";
import styled from "styled-components";
import DxcTable from "./Table";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";

export default {
  title: "Table",
  component: DxcTable,
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
  parameters: {
    //👇 The viewports object from the Essentials addon
    viewport: {
      //👇 Your own default viewport
      defaultViewport: 'iphone6',
    },
  },
};

export const Chromatic = () => (
  <>
    <ExampleContainer>
      <Title title="Default" theme="light" level={4} />
      <DxcTable>
        <tr>
          <th>header 1</th>
          <th>header 2</th>
          <th>header 3</th>
        </tr>
        <tr>
          <td>cell 1</td>
          <td>cell 2</td>
          <td>cell 3</td>
        </tr>
        <tr>
          <td>cell 4</td>
          <td>cell 5</td>
          <td>cell 6</td>
        </tr>
        <tr>
          <td>cell 7</td>
          <td>cell 8</td>
          <td>Cell 9</td>
        </tr>
      </DxcTable>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With scrollbar" theme="light" level={4} />
      <div
        style={{ height: 200 + "px", display: "flex", flexDirection: "row", width: 100 + "%", marginBottom: 50 + "px" }}
      >
        <DxcTable>
          <tr>
            <th>
              header<br></br>subheader
            </th>
            <th>
              header<br></br>subheader
            </th>
            <th>
              header<br></br>subheader
            </th>
          </tr>
          <tr>
            <td>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </td>
            <td>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </td>
            <td>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </td>
          </tr>
          <tr>
            <td>cell data</td>
            <td>cell data</td>
            <td>cell data</td>
          </tr>
          <tr>
            <td>cell data</td>
            <td>cell data</td>
            <td>cell data</td>
          </tr>
          <tr>
            <td>cell data</td>
            <td>cell data</td>
            <td>cell data</td>
          </tr>
          <tr>
            <td>cell data</td>
            <td>cell data</td>
            <td>cell data</td>
          </tr>
          <tr>
            <td>cell data</td>
            <td>cell data</td>
            <td>cell data</td>
          </tr>
          <tr>
            <td>cell data</td>
            <td>cell data</td>
            <td>cell data</td>
          </tr>
          <tr>
            <td>cell data</td>
            <td>cell data</td>
            <td>cell data</td>
          </tr>
          <tr>
            <td>cell data</td>
            <td>cell data</td>
            <td>cell data</td>
          </tr>
        </DxcTable>
      </div>
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcTable margin="xxsmall">
        <tr>
          <th>header 1</th>
          <th>header 2</th>
          <th>header 3</th>
        </tr>
        <tr>
          <td>cell 1</td>
          <td>cell 2</td>
          <td>cell 3</td>
        </tr>
        <tr>
          <td>cell 4</td>
          <td>cell 5</td>
          <td>cell 6</td>
        </tr>
        <tr>
          <td>cell 7</td>
          <td>cell 8</td>
          <td>Cell 9</td>
        </tr>
      </DxcTable>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcTable margin="xsmall">
        <tr>
          <th>header 1</th>
          <th>header 2</th>
          <th>header 3</th>
        </tr>
        <tr>
          <td>cell 1</td>
          <td>cell 2</td>
          <td>cell 3</td>
        </tr>
        <tr>
          <td>cell 4</td>
          <td>cell 5</td>
          <td>cell 6</td>
        </tr>
        <tr>
          <td>cell 7</td>
          <td>cell 8</td>
          <td>Cell 9</td>
        </tr>
      </DxcTable>
      <Title title="Small margin" theme="light" level={4} />
      <DxcTable margin="small">
        <tr>
          <th>header 1</th>
          <th>header 2</th>
          <th>header 3</th>
        </tr>
        <tr>
          <td>cell 1</td>
          <td>cell 2</td>
          <td>cell 3</td>
        </tr>
        <tr>
          <td>cell 4</td>
          <td>cell 5</td>
          <td>cell 6</td>
        </tr>
        <tr>
          <td>cell 7</td>
          <td>cell 8</td>
          <td>Cell 9</td>
        </tr>
      </DxcTable>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcTable margin="medium">
        <tr>
          <th>header 1</th>
          <th>header 2</th>
          <th>header 3</th>
        </tr>
        <tr>
          <td>cell 1</td>
          <td>cell 2</td>
          <td>cell 3</td>
        </tr>
        <tr>
          <td>cell 4</td>
          <td>cell 5</td>
          <td>cell 6</td>
        </tr>
        <tr>
          <td>cell 7</td>
          <td>cell 8</td>
          <td>Cell 9</td>
        </tr>
      </DxcTable>
      <Title title="Large margin" theme="light" level={4} />
      <DxcTable margin="large">
        <tr>
          <th>header 1</th>
          <th>header 2</th>
          <th>header 3</th>
        </tr>
        <tr>
          <td>cell 1</td>
          <td>cell 2</td>
          <td>cell 3</td>
        </tr>
        <tr>
          <td>cell 4</td>
          <td>cell 5</td>
          <td>cell 6</td>
        </tr>
        <tr>
          <td>cell 7</td>
          <td>cell 8</td>
          <td>Cell 9</td>
        </tr>
      </DxcTable>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcTable margin="xlarge">
        <tr>
          <th>header 1</th>
          <th>header 2</th>
          <th>header 3</th>
        </tr>
        <tr>
          <td>cell 1</td>
          <td>cell 2</td>
          <td>cell 3</td>
        </tr>
        <tr>
          <td>cell 4</td>
          <td>cell 5</td>
          <td>cell 6</td>
        </tr>
        <tr>
          <td>cell 7</td>
          <td>cell 8</td>
          <td>Cell 9</td>
        </tr>
      </DxcTable>
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcTable margin="xxlarge">
        <tr>
          <th>header 1</th>
          <th>header 2</th>
          <th>header 3</th>
        </tr>
        <tr>
          <td>cell 1</td>
          <td>cell 2</td>
          <td>cell 3</td>
        </tr>
        <tr>
          <td>cell 4</td>
          <td>cell 5</td>
          <td>cell 6</td>
        </tr>
        <tr>
          <td>cell 7</td>
          <td>cell 8</td>
          <td>Cell 9</td>
        </tr>
      </DxcTable>
      <hr />
    </ExampleContainer>
  </>
);

const Decorator = styled.div`
  * {
    overflow: auto !important;
    /* width */
    ::-webkit-scrollbar {
      width: 10px !important;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1 !important;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888 !important;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555 !important;
    }
  }
`;
