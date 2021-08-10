import {
    cleanup, render,
    screen
} from '@testing-library/react/pure';
import userEvent from '@testing-library/user-event';
import axios from "axios";
import SearchBox from './SearchBox';

describe("Test search box.", () => {
    cleanup();
    var books = [{
        "id": 6,
        "bookTitle": "Zoology",
        "bookAuthor": "Ashwin",
        "min": 20,
        "reads": "0.7k",
        "image": "book_image1.png",
        "category": "Medicine"
    },
    {
        "id": 11,
        "bookTitle": "tennis",
        "bookAuthor": "Ashish",
        "category": "Outdoor Sports",
        "min": 20,
        "reads": "0.7k",
        "image": "book_image1.png"
    },
    {
        "id": 12,
        "bookTitle": "fone",
        "bookAuthor": "Anand",
        "category": "Outdoor Sports",
        "min": 20,
        "reads": "0.7k",
        "image": "book_image1.png"
    },
    {
        "id": 13,
        "bookTitle": "chess",
        "bookAuthor": "Aslam",
        "category": "Indoor Sports",
        "min": 20,
        "reads": "0.7k",
        "image": "book_image1.png"
    }];



    test('Type letters in search box and check the number of results in the dropdown. A-4, As-3 , Ash-2, Ashw-1  ', async () => {
        jest.mock('axios');
        axios.get = jest.fn().mockImplementation(() => {
            return Promise.resolve({ data: books });
        });
        const waitForData = () => {
            return new Promise((resolve) => {
                setTimeout(() => { resolve("wait") }, 1500);
            });
        }
        render(<SearchBox />);
        await waitForData();
        const inputElem = screen.getByRole('textbox');
        userEvent.type(inputElem, 'A');
        const aslamEntry = screen.getByText(/by Aslam/i);
        const anandEntry = screen.getByText(/by Anand/i);
        const ashishEntry = screen.getByText(/by Ashish/i);
        const ashwinEntry = screen.getByText(/by Ashwin/i);
        expect(aslamEntry).toBeInTheDocument();
        expect(anandEntry).toBeInTheDocument();
        expect(ashishEntry).toBeInTheDocument();
        expect(ashwinEntry).toBeInTheDocument();

        userEvent.type(screen.getByRole('textbox'), 's');
        expect(anandEntry).not.toBeInTheDocument();

        userEvent.type(screen.getByRole('textbox'), 'h');
        expect(aslamEntry).not.toBeInTheDocument();

        userEvent.type(screen.getByRole('textbox'), 'w');
        expect(ashishEntry).not.toBeInTheDocument();
    });
});