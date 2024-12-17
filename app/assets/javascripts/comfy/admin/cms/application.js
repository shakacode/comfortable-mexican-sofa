import ujs from "@rails/ujs";
ujs.start();

import "bootstrap/js/src/tab";

import "../../vendor/diff/diff_match_patch.min";
import "../../vendor/diff/pretty_text_diff";
import "../../vendor/fontawesome";
import "../../vendor/redactor";
import "../../vendor/redactor/filemanager";
import "../../vendor/redactor/imagemanager";
import "../../vendor/redactor/definedlinks";
import "../../vendor/redactor/table";
import "../../vendor/redactor/video";

//= require_directory ../../vendor/redactor/i18n/

import "../../vendor/flatpickr.min";
//= require_directory ../../vendor/flatpickr/i18n/

import "./base";
import "./categories";
import "./codemirror";
import "./diff";
import "./file_link";
// import "./file_upload";
import "./files_modal";
import "./page_fragments";
import "./sortable_list";
import "./slugify";
import "./timepicker";
import "./wysiwyg";

import "./custom";
