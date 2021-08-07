import { css } from "styled-components";
import { breakpointsMediaQuery } from "./breakpointsMedia";

export function propertyToStyle(nameProperty){
    
    return function(props) {
        const propsValue = props[nameProperty];
       
        if (typeof propsValue === 'string') {
        
            return {
                [nameProperty]: propsValue 
            };
        
        } else if (typeof propsValue === 'object') {
            console.log(propsValue);
            return breakpointsMediaQuery({
                xs : {
                    [nameProperty]: propsValue.xs
                },
                sm : {
                    [nameProperty]: propsValue.sm
                },
                md : {
                    [nameProperty]: propsValue.md
                },
                lg : {
                    [nameProperty]: propsValue.lg
                },
                xl : {
                    [nameProperty]: propsValue.xl
                },
            });        
        }
    }
    
}