import store from 'store/store';

function increment() {
	store.dispatch('counter/increment');
}

export default increment;
