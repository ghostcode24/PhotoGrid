import styled from "@emotion/styled";

export const Header = styled("header")({
  padding: 16,
  backgroundColor: "hsl(0 0% 94%)"
});

export const TileView = styled("div")(props => ({
  display: "grid",
  padding: props.spacing,
  gridGap: props.spacing,
  gridTemplateColumns: `repeat(auto-fill, minmax(${props.minCellWidth}px, 1fr))`
}));

TileView.defaultProps = {
  spacing: 16,
  minCellWidth: 120
};

const thumbnailStyles = {
  display: "block",
  width: "100%",
  objectFit: "cover",
  cursor: "zoom-in"
};

const fullscreenStyles = {
  position: "fixed",
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  width: "40vw",
  margin: "auto",
  zIndex: 10,
  cursor: "zoom-out"
};

export const Photo = styled("img")(props =>
  props.isActive ? fullscreenStyles : thumbnailStyles
);

export const Frame = styled("div")({
  position: "fixed",
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  backgroundColor: "hsla(0, 0%, 100%, 0.96)",
  zIndex: 5
});
