import { fireEvent,act, screen, cleanup,  render } from '@testing-library/react';
import Reservation from './Reservation';
import React from 'react'



afterEach(cleanup)

describe("Input Component", ()=> {

    it("full name renders", ()=> {
        const { getByTestId } = render(<Reservation/>) 
        
        expect(getByTestId("testFullName")).toBeTruthy()
    })
    it("contact number renders", ()=> {
        const { getByTestId } = render(<Reservation/>) 
        
        expect(getByTestId("testContactNumber")).toBeTruthy()
    })
    it("email address renders", ()=> {
        const { getByTestId } = render(<Reservation/>) 
        
        expect(getByTestId("testEmail")).toBeTruthy()
    })
    it("num guests renders", ()=> {
        const { getByTestId } = render(<Reservation/>) 
        
        expect(getByTestId("testGuests")).toBeTruthy()
    })
    it("date renders", ()=> {
        const { getByTestId } = render(<Reservation/>) 
        
        expect(getByTestId("testResDate")).toBeTruthy()
    })
    it("time renders", ()=> {
        const { getByTestId } = render(<Reservation/>) 
        
        expect(getByTestId("testSelectList")).toBeTruthy()
    })
    it("full name updates on change", () => {
        const{getByTestId} = render(<Reservation />);
        const fullNameInput = getByTestId("testFullName");
        fireEvent.change(fullNameInput, {target: {value: "test"}})
        expect(fullNameInput.value).toBe("test")
    })
    it("number updates on change", () => {
        const{getByTestId} = render(<Reservation />);
        const contactNumberInput = getByTestId("testContactNumber");
        fireEvent.change(contactNumberInput, {target: {value: "1234567891"}})
        expect(contactNumberInput.value).toBe("1234567891")
    })
    it("email updates on change", () => {
        const{getByTestId} = render(<Reservation />);
        const emailInput = getByTestId("testEmail");
        fireEvent.change(emailInput, {target: {value: "123@123.com"}})
        expect(emailInput.value).toBe("123@123.com")
    })
    it("guests updates on change", () => {
        const{getByTestId} = render(<Reservation />);
        const guestsInput = getByTestId("testGuests");
        fireEvent.change(guestsInput, {target: {value: "4"}})
        expect(guestsInput.value).toBe("4")
    })
    it("date updates on change", () => {
        const{getByTestId} = render(<Reservation />);
        const dateInput = getByTestId("testResDate");
        fireEvent.change(dateInput, {target: {value: "2021-07-04"}})
        expect(dateInput.value).toBe("2021-07-04")
    })
   
})