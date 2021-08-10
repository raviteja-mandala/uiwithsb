import { ThemeProvider } from "@material-ui/styles";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, mount } from "enzyme";
import React from "react";
import theme from "../../../themes/theme";
import BookStatusButton from "./BookStatusButton";

configure({ adapter: new Adapter() });

describe("Test BookCard component.", () => {

    test("test properties passed", () => {
        const changeStatusMockFunc = jest.fn();
        const bookStatusBtnComp = mount(<ThemeProvider theme={theme}><BookStatusButton children="finished" clickfunc={changeStatusMockFunc}></BookStatusButton></ThemeProvider>);
        //expect(bookStatusBtnComp.find({ children: "finished" }).exists()).toBe(true);
        const changeStatusBtn = bookStatusBtnComp.findWhere(node => {
            return node.type() === 'button' && node.text() === 'finished'
        });
        expect(changeStatusBtn.exists()).toBe(true);
        changeStatusBtn.simulate('click');
        expect(changeStatusMockFunc).toHaveBeenCalled();
    })
})