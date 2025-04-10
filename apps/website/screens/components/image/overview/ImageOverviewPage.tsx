import { DxcImage, DxcParagraph, DxcFlex, DxcBulletedList } from "@dxc-technology/halstack-react";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          The image component serves as a versatile tool for efficiently loading and displaying visual content across
          diverse contexts within your application. This powerful component is designed to optimize performance while
          enhancing the overall user experience. By leveraging its capabilities, developers can seamlessly integrate
          images into their projects, ensuring smooth rendering and responsive behavior.
        </DxcParagraph>
        <DxcParagraph>
          To maximize the potential of the Image component and create visually appealing, high-performing applications,
          it's crucial to adhere to certain best practices and usage guidelines. These recommendations encompass various
          aspects of image implementation, from technical considerations to user-centric design principles. By following
          these guidelines, you can ensure that your images not only load quickly and efficiently but also contribute
          positively to the user's interaction with your application.
        </DxcParagraph>
        <DxcParagraph>
          In the sections that follow, we'll delve into a comprehensive set of best practices and usage guidelines.
          These insights will help you optimize performance, enhance accessibility, and create a more engaging visual
          experience for your users across different devices and contexts.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Accessibility",
    content: (
      <>
        <DxcParagraph>
          The Image component should always include an <Code>alt</Code> property to describe the content of the image.
          This is important for users who rely on screen readers to understand the content of the page. The alt text
          should be a short description of the image content.
        </DxcParagraph>
        <DxcParagraph>
          If an image is purely decorative, use an empty value (<Code>alt=""</Code>) to indicate this to screen readers,
          preventing unnecessary noise. Also, include captions when the image is an integral part of the content,
          providing users with additional context.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Aspect ratio and cropping",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          <strong>Preserve aspect ratio.</strong> The aspect ratio of an image should generally be preserved, unless
          explicitly specified otherwise by the design.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Avoid distortion.</strong> When resizing images, avoid stretching or squashing them to prevent
          distortion. Instead, use <Code>object-fit</Code> to set how the image is displayed or control the dimensions
          through the container.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Thumbnails and zoom.</strong> When displaying thumbnails or zoomed images, ensure that the image is
          cropped appropriately to focus on the most relevant content.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
  {
    title: "Considerations for background images",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          <strong>Image as content vs. background.</strong> If the image is essential content, use the Image component.
          For decorative backgrounds, consider using CSS background images to keep content and design separate.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Contrast and readability.</strong> Ensure sufficient contrast between background images and overlaid
          text. This may require applying filters or overlays to the image.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
  {
    title: "Responsiveness",
    content: (
      <DxcParagraph>
        An image should always adapt fluidly to the size of its container, ensuring that it maintains its aspect ratio
        unless otherwise specified. To achieve this, it's important to define the width and height properties to ensure
        images are loaded with known dimensions, which helps maintain layout stability and reduces cumulative layout
        shifts. When designing for multiple devices, leveraging responsive image techniques, such as the{" "}
        <Code>srcset</Code> and
        <Code>sizes</Code> props, ensures that the appropriate resolution is served based on the user's screen size and
        the layout's space allocation. This not only improves performance but also optimizes the experience across
        different viewports.
      </DxcParagraph>
    ),
  },
  {
    title: "Best practices",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          <strong>Use high-quality images:</strong> always use high-resolution images to deliver a crisp and clear
          display, especially on high-density (retina) screens. This ensures a professional look and prevents
          pixelation.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Optimize images:</strong> compress and optimize images for the web to minimize file sizes. Reducing
          load times and bandwidth consumption is crucial for performance, especially on mobile devices.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Leverage modern formats:</strong> whenever possible, use newer image formats like WebP for improved
          compression without sacrificing quality. Be sure to provide fallback formats for browsers that don't support
          them.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Allow lazy loading:</strong> implement lazy loading (<Code>loading="lazy"</Code>) for images that
          appear later on the page (below the fold). This helps speed up initial page loads and improve overall
          performance.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Use responsive image techniques:</strong> make use of <Code>srcset</Code> and <Code>sizes</Code> props
          to serve images that adapt to different screen resolutions and sizes, ensuring the best display quality across
          devices.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Avoid using images for text content:</strong> text embedded within images reduces accessibility and
          harms SEO. Always use HTML text to ensure readability by screen readers and search engines.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Limit decorative images:</strong> avoid overloading pages with unnecessary decorative images. This not
          only reduces performance but can also distract users from the main content.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Avoid images for icons:</strong> use scalable vector graphics (SVGs) instead of images for icons. SVGs
          offer better performance, scalability, and accessibility across various screen sizes.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const ImageOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/image/overview/ImageOverviewPage.tsx" />
  </DxcFlex>
);

export default ImageOverviewPage;
