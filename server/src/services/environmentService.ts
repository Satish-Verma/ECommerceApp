import * as jsdomGlobal from "jsdom-global";
import { FileReader } from "FileReader";
import * as JSZip from "jszip";

class EnvironmentService {
    static setup() {
        jsdomGlobal();
        global.FileReader = FileReader;
        global.JSZip = JSZip;
    }
}

EnvironmentService.setup();