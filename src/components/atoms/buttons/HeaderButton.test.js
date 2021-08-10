import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, mount } from "enzyme";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import HeaderButton from "./HeaderButton";

configure({ adapter: new Adapter() });

describe("Test BookCard component.", () => {

    test("test properties passed", () => {
        const mockFunc = jest.fn();
        const bookStatusBtnComp = mount(<MemoryRouter><HeaderButton children="Add Book" onlinkclick={mockFunc}></HeaderButton></MemoryRouter>);
        const changeStatusBtn = bookStatusBtnComp.findWhere(node => {
            return node.type() === 'a' && node.text() === 'Add Book'
        });
        expect(changeStatusBtn.exists()).toBe(true);
        changeStatusBtn.simulate('click');
        expect(mockFunc).toHaveBeenCalled();
    })
})