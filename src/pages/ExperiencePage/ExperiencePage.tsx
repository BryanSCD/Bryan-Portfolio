import {
  forwardRef,
  SystemProps,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { Page, PageProps } from "../../components";
import { experience } from "./Experience";
import { ExperienceTimelineComponent } from "./ExperienceTimelineComponent";

export type ExperiencePageProps = {
  separatorColor: SystemProps["color"];
} & PageProps;

export const ExperiencePage = forwardRef<ExperiencePageProps, "div">(
  ({ separatorColor, ...rest }, ref) => {
    const isLarge = useBreakpointValue({ base: true, xl: false });
    return (
      <Page
        ref={ref}
        childrenSeparatorSpacing={isLarge ? "8" : "-40"}
        separatorProps={{
          separatorLabel: "Experience",
          separatorColor,
          separatorCloud: "./experience/cloud.png",
          separatorCloudsBackground: "./experience/clouds_background.png",
        }}
        {...rest}
      >
        <VStack spacing={isLarge ? "20" : "0"}>
          {experience.map((value, index) => {
            if (index == 0) {
              return (
                <ExperienceTimelineComponent
                  {...value}
                  key={index}
                  extraUpperDivider={{ variant: "dashed" }}
                  upperDivider={{ variant: "dashed" }}
                />
              );
            } else if (index == experience.length - 1) {
              return (
                <ExperienceTimelineComponent
                  {...value}
                  key={index}
                  bottomDivider={{ variant: "dashed" }}
                  extraBottomDivider={{ variant: "dashed" }}
                />
              );
            } else {
              return <ExperienceTimelineComponent {...value} key={index} />;
            }
          })}
        </VStack>
      </Page>
    );
  }
);
