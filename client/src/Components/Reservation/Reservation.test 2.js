import { fireEvent,act, screen, cleanup,  render, getByText } from '@testing-library/react';
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

    it("time updates on change", () => {
        const{getByTestId} = render(<Reservation />);
        const resTime = getByTestId("testSelectList");
        fireEvent.change(resTime, {target: {value: "11:30"}})
        expect(resTime.value).toBe("11:30")
    })
    
   
})

describe("Submit Test", () => {
    afterEach(cleanup)


    it("clear form test", () => {
        

        const{getByTestId} = render(<Reservation />);
        const fullNameInput = getByTestId("testFullName");
        const contactNumberInput = getByTestId("testContactNumber");
        const emailInput = getByTestId("testEmail");
        const guestsInput = getByTestId("testGuests");
        const dateInput = getByTestId("testResDate");
        const resTime = getByTestId("testSelectList");        
        fireEvent.change(resTime, {target: {value: "11:30"}})
        fireEvent.change(dateInput, {target: {value: "2021-07-04"}})
        fireEvent.change(emailInput, {target: {value: "123@123.com"}})
        fireEvent.change(contactNumberInput, {target: {value: "1234567891"}})        
        fireEvent.change(guestsInput, {target: {value: "4"}})        
        fireEvent.change(fullNameInput, {target: {value: "test"}})
        fireEvent.click(screen.getByText('Clear Form'))
        expect(fullNameInput.value).toBe('')
        expect(resTime.value).toBe("11:00")
        expect(dateInput.value).toBe("")
        expect(guestsInput.value).toBe("")
        expect(emailInput.value).toBe("")
        expect(contactNumberInput.value).toBe("")
        expect(fullNameInput.value).toBe("")
    })
    it("pick table renders", () => {
        const pickTable = jest.fn();
        
        fireEvent.click(screen.getByText('Table'))
        expect(pickTable).toBeTruthy()


    })
})