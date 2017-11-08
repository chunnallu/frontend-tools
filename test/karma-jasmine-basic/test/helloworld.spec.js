/**
 * Created by lcl on 2017/11/7.
 */
import HelloWorldController from '../src/helloworld';
describe(('helloworld controller'),function(){

	let ctrl;

	beforeEach(function(){
		ctrl = new HelloWorldController();
	});

	it('add should be correct',function(){
		expect(ctrl.add(1,2)).toBe(3);
		expect(ctrl.add(-1,2)).toBe(1);
		expect(ctrl.add(-1,-1)).toBe(-2);
		expect(ctrl.add(0,0)).toBe(0);
	})

	it('mod should be mod correct',() =>{
		expect(ctrl.mod(10,2)).toBe(0);
		expect(ctrl.mod(0,2)).toBe(0);
		expect(ctrl.mod(2,0)).toBeNaN();
	})
}
)