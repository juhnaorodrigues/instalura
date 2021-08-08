import breakpointsMediaQuery from './breakpointsMedia';

function propertyToStyle(nameProperty) {
  return (props) => {
    const propsValue = props[nameProperty];

    if (typeof propsValue === 'string' || typeof propsValue === 'number') {
      return {
        [nameProperty]: propsValue,
      };
    } if (typeof propsValue === 'object') {
      return breakpointsMediaQuery({
        xs: {
          [nameProperty]: propsValue.xs,
        },
        sm: {
          [nameProperty]: propsValue.sm,
        },
        md: {
          [nameProperty]: propsValue.md,
        },
        lg: {
          [nameProperty]: propsValue.lg,
        },
        xl: {
          [nameProperty]: propsValue.xl,
        },
      });
    }
    return {
      [nameProperty]: propsValue,
    };
  };
}

export { propertyToStyle as default };
