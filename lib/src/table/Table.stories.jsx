import React from "react";
import DxcTable from "./Table";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";

export default {
  title: "Table",
  component: DxcTable,
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
    </ExampleContainer>
  </>
);
