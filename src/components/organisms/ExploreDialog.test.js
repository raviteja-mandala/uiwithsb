import {
    cleanup, render,
    screen, waitForElementToBeRemoved
} from '@testing-library/react/pure';
import userEvent from '@testing-library/user-event';
import axios from "axios";
import { BrowserRouter, MemoryRouter, Route } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ExploreBooks from './ExploreBooks';
import ExploreDialog from './ExploreDialog';


describe("Test explore dialog which displays all categories.", () => {
    cleanup();
    var books = [{
        "id": 6,
        "bookTitle": "Zoology",
        "bookAuthor": "Vikram",
        "min": 20,
        "reads": "0.7k",
        "image": "book_image1.png",
        "category": "Medicine"
    }];

    const mockFetchMethod = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({ json: () => Promise.resolve(books) }));
    render(<MemoryRouter initialEntries={["/explore/Medicine"]}
        initialIndex={0}> <ExploreDialog open={true} onclose={() => { }} /><Route path="/explore/:category" component={ExploreBooks}>
        </Route></MemoryRouter>);
    test('Check whether category is displayed. ', async () => {
        const myElement = await screen.findByText(/Medicine/i);
        expect(myElement).toBeInTheDocument();
        const tree = renderer.create((<BrowserRouter><ExploreDialog open={true} onclose={() => { }} /></BrowserRouter>)).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('Check whether click on category will display Explore books page. ', async () => {
        const mockFetchMethod = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({ json: () => Promise.resolve(books) }));
        jest.mock('axios');
        axios.get = jest.fn().mockImplementation((url) => {
            switch (url) {
                case 'http://localhost:3000/books':
                    return Promise.resolve({ data: books });
                    break;
                case 'http://localhost:3000/userBooks':
                    return Promise.resolve({ data: books });
                    break;
                default:
                    return Promise.reject(new Error('not found'));
                    break;
            }
        });
        userEvent.click(screen.getByText(/Medicine/i));
        await waitForElementToBeRemoved(() => screen.getByText('loading...'));
        const myElement = await screen.findByText(/Zoology/i);
        expect(myElement).toBeInTheDocument();
    });
});