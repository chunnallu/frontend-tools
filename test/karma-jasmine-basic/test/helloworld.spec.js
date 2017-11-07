/**
 * Created by lcl on 2017/11/7.
 */
import HelloWorldController from '../src/helloworld';
describe(('helloworld controller'),function(){

	let ctrl;

	beforeEach(function(){
		ctrl = new HelloWorldController();
	});

	it('add function should add two number',function(){
		expect(ctrl.add(1,2)).toBe(3);
	})
}
)