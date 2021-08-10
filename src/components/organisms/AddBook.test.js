import {
    cleanup,
    render,
    screen
} from '@testing-library/react/pure';
import userEvent from '@testing-library/user-event';
import React from "react";
import AddBook from './AddBook';

describe('Test Add book page.', () => {
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
    render(<AddBook />);
    test("provide invalid book title, check for error.", async () => {
        userEvent.type(screen.getByText('Book Title'), 'Java1.2');
        const errorElement = screen.getByText(/Title should contain only alphabets./i);
        expect(errorElement).toBeInTheDocument();
    });
    test("click on 'Add Book' button in the above error state, check for error", async () => {
        userEvent.click(screen.getByTestId('addBook'));
        const errorElement = screen.getByText(/Form cannot be submitted with errors!./i);
        expect(errorElement).toBeInTheDocument();
    });
    test("Fill all fields with valid input, check for success message", async () => {
        cleanup();
        render(<AddBook />);
        const mockFetchMethod = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({ json: () => Promise.resolve(userBooks) }));
        const inputElements = screen.getAllByRole('textbox');
        userEvent.type(inputElements[0], 'Java');
        userEvent.type(inputElements[1], 'Richardson');
        userEvent.type(inputElements[2], 'Computer Science');
        userEvent.click(screen.getByTestId('addBook'));
        const successMessage = await screen.findByText(/Book with title Java is successfully created!/i);
        expect(successMessage).toBeInTheDocument();
    });
});