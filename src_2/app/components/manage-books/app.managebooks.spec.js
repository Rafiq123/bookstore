import { assert } from 'chai';
import ManageBooksComponent from "./app.managebooks.ctrl";
import LocalStore from '../../services/app-local-store/app.localstore.srv';

let component;

describe("ManageBooks Controller Unit test",()=>{

    //constructor part
    describe("#constructor",()=>{
        beforeEach(function() {
            component = new ManageBooksComponent();
            //console.log(component);
        });
        
        it('should initialize msg to hello',function(){
            assert.equal(component.msg, "Hello");
        });

        it('should initialize msg2 to Welcome',function(){
            assert.equal(component.msg2, "Welcome");
        })
    });

    //testing Methods
    describe('#getBookDetails Method',()=>{
       // beforeEach(module('bookstore'));

        beforeEach(()=>{            
            let LocalStores = new LocalStore();
            component = new ManageBooksComponent(LocalStores);
        });


        it("returns book details from local storage",()=>{
           console.log(books);
            let books = component.getBookDetails();
            assert.exists(books);
        });

    })


});