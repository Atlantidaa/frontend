import 'style-attr';
import { stringify } from 'style-attr';

export default {
    getString(object) {
        return stringify(object);
    }
}