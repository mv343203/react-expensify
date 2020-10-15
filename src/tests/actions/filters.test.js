import { TestScheduler } from 'jest';
import moment from 'moment';
import { setStartDate, setEndDate,
setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';


test('should generate a set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
      type: 'SET_START_DATE',
      startDate: moment(0)
  });
});

test('should generate a set end date action object', () => {
   const action = setEndDate(moment(0));
   expect(action).toEqual({
       type: 'SET_END_DATE',
       endDate: moment(0)
   });
});

test('should retunr text filter', () => {
   const text = "Something in"
   const action = setTextFilter(text);
   expect(action).toEqual({
       type: "SET_TEXT_FILTER",
       text
   })
});

test('should return text filter with default', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ''
    })
 });


 test('should generate sort by date action object', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE'});
 });

 test('should generate sort by amount action object', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT'});
 });



