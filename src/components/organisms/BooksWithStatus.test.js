import { ThemeProvider } from "@material-ui/styles";
import {
    cleanup,
    render,
    screen,
    waitForElementToBeRemoved
} from '@testing-library/react/pure';
import userEvent from '@testing-library/user-event';
import axios from "axios";
import React from "react";
import theme from "../../themes/theme";
import BooksWithStatus from './BooksWithStatus';
import WindowContext from "./WindowContext";

describe('Test Mylibrary page.', () => {
    jest.mock('axios');
    const userBooks = [
        {
            "id": 8,
            "bookAuthor": "anand",
            "bookTitle": "carroms",
            "category": "Indoor Sports",
            "min": 20,
            "reads": "0.7k",
            "image": "book_image1.png",
            "status": "currentlyReading"
        },
        {
            "id": 9,
            "bookAuthor": "vishal",
            "bookTitle": "golf",
            "category": "Outdoor Sports",
            "min": 20,
            "reads": "0.7k",
            "image": "book_image1.png",
            "status": "finished"
        }
    ];
    cleanup();
    test("test whether currently reading book is present by default", async () => {
        axios.get = jest.fn().mockImplementation(() => Promise.resolve({ data: userBooks }));
        render(<WindowContext.Provider value={{ width: 1300, height: 950 }}>  <ThemeProvider theme={theme}><BooksWithStatus /></ThemeProvider></WindowContext.Provider>);
        await waitForElementToBeRemoved(() => screen.getByText('loading...'));
        const crBookElem = await screen.findByText(/carroms/i);
        expect(crBookElem).toBeInTheDocument();
    });
    test("click finished button, test whether finished book is present", async () => {
        userEvent.click(screen.getByText('Finished'));
        const finishedBookElem = await screen.getByText(/golf/i);
        expect(finishedBookElem).toBeInTheDocument();
    });
    test("click change status button of finished status book, click on Currently Reading button, test golf book is present", async () => {
        const updatedBook = [{
            "id": 9,
            "bookAuthor": "vishal",
            "bookTitle": "golf",
            "category": "Outdoor Sports",
            "min": 20,
            "reads": "0.7k",
            "image": "book_image1.png",
            "status": "currentlyReading"
        }];
        const mockFetchMethod = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({ json: () => Promise.resolve(updatedBook) }));
        axios.get.mockImplementation(() => Promise.resolve({ data: [userBooks[0], updatedBook] }));
        userEvent.click(screen.getByText('Change status'));
        userEvent.click(screen.getByText('Currently Reading'));
        const crBookElem = await screen.findByText(/golf/i);
        expect(crBookElem).toBeInTheDocument();
    });
});