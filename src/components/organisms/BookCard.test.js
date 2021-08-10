import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, mount } from "enzyme";
import React from "react";
import BookCard from "./BookCard";

configure({ adapter: new Adapter() });

describe("Test BookCard component.", () => {
    const book = {
        "id": 8,
        "bookAuthor": "anand",
        "bookTitle": "carroms",
        "category": "Indoor Sports",
        "min": 20,
        "reads": "0.7k",
        "image": "book_image1.png",
    };
    test("test properties passed", () => {
        const changeStatusMockFunc = jest.fn();
        const bookCardComponent = mount(<BookCard book={book} myLibrary={true} onchangestate={changeStatusMockFunc}></BookCard>);
        expect(bookCardComponent.find({ children: "carroms" }).exists()).toBe(true);
        expect(bookCardComponent.find({ children: "anand" }).exists()).toBe(true);
        const changeStatusBtn = bookCardComponent.findWhere(node => {
            return node.type() === 'button' && node.text() === 'Change status'
        });
        expect(changeStatusBtn.exists()).toBe(true);
        changeStatusBtn.simulate('click');
        expect(changeStatusMockFunc).toHaveBeenCalled();
    })
})