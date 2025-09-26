class MockDOMRect implements DOMRect {
  x = 0;
  y = 0;
  width = 0;
  height = 0;
  top = 0;
  left = 0;
  bottom = 0;
  right = 0;

  constructor(x?: number, y?: number, width?: number, height?: number) {
    this.x = x ?? 0;
    this.y = y ?? 0;
    this.width = width ?? 0;
    this.height = height ?? 0;
    this.top = this.y;
    this.left = this.x;
    this.bottom = this.y + this.height;
    this.right = this.x + this.width;
  }

  toJSON() {
    return {};
  }

  static fromRect(rect?: DOMRectInit) {
    return new MockDOMRect(rect?.x, rect?.y, rect?.width, rect?.height);
  }
}

export default MockDOMRect;
