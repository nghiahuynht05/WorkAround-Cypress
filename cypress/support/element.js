function define(name, value) {
    Object.defineProperty(exports, name, {
        value: value,
        enumerable: true
    });
}

//-----------Login---------------//
define('USER_NAME', `//input[@placeholder='User name']`);
define('PASSWORD', `//input[@placeholder='Password']`);
define('LOGIN', `//button[@type='submit']`);

//-----------Module---------------//
define('SETTING', `//*[@href='/settings/Fleet_info']`);
define('PERMISSION', `//*[@href='/settings/Permission']`);
define('USER', `//*[@href='/settings/User']`);
define('DYNAMIC_SURCHARGE', `//*[@href='/settings/Dynamic_surcharge']`);
define('DYNAMIC_FARE', `//*[@href='/settings/Dynamic_fare']`);
define('CAR_CARMGMT', `//*[@href='/settings/Car/Car_mgmt']`);
define('CAR_CARTYPE', `//*[@href='/settings/Car/Car_type']`);

//-----------Fleet info---------------//
define('INFO_FLEET_NAME', ':nth-child(1) > .form-custom');
define('INFO_FLEET_PHONE', ':nth-child(2) > .form-custom');
define('INFO_FLEET_EMAIL', ':nth-child(3) > .form-custom');
define('INFO_FLEET_COUNTRY', ':nth-child(4) > .form-custom');
define('INFO_FLEET_TIMEZONE', ':nth-child(5) > .form-custom');
define('INFO_FLEET_ADDRESS', ':nth-child(6) > .form-custom');
define('INFO_FLEET_WEBSITE', ':nth-child(7) > .form-custom');
define('INFO_FLEET_CURENCY', ':nth-child(8) > .form-custom');
define('INFO_FLEET_UNIT', ':nth-child(9) > .form-custom');

//-----------Permission---------------//
define('COLUNM_NAME', `(//*[@class='cellTable_cell'])[1]`);
define('COLUNM_STATUS', `(//*[@class='cellTable_cell'])[2]`);
define('COLUNM_ACTIONS', `(//*[@class='cellTable_cell'])[3]`);
define('BUTTON_ADD', `//*[@role='toolbar']//button[@type='button']/span[text()='Add']`);
define('BUTTON_DELETE', `//*[@role='toolbar']//button[@type='button']/span[text()='Delete']`);
define('BUTTON_ACTIVATE', `//*[@role='toolbar']//button[@type='button']/span[text()='Activate']`);
define('BUTTON_DEACTIVATE', `//*[@role='toolbar']//button[@type='button']/span[text()='Deactivate']`);
define('BUTTON_EXPORT', `//*[@role='toolbar']//button[@type='button']/span[text()='Export to excel']`);

define('PERMISSION_NAME', `//input[@placeholder='Name']`);
define('PERMISSION_MODULE', `//label/span[text()='`);

define('BUTTON_SAVE', `//button[@type='button']/span[text()='Save']`);
define('BUTTON_CANCEL', `//button[@type='button']/span[text()='Cancel']`);
define('isACTIVE', '//span/span[text()="Active"]');

define('NOTIFICATION',`//*[@class="noti-title"]`)
define('HEADERS_NAME', `//*[@class='table-header stickyTableCellContainer header-align-toolbar'] | //*[@class='table-header stickyTableCellContainer ']`);
define('VIEWLIST_ITEM', `//*[@class="cell_content"]`);
define('VIEWLIST_COLUNM_STATUS', `//*[@class='stickyTableCellContainer ']//span[text()="Active"]`);
define('VIEWLIST_COLUNM_ACTIONS', `//*[@class='table-actions-dropdown  dropdown btn-group']//button`);
define('GRID_ITEM', `//*[@class='cellTable_cell']`);
define('GRID_DETAIL', `//*[@class='cellTable_cell']//*[@class='clickable']`);
define('MENU_DEACTIVATE', `//*[@class='table-actions-dropdown  dropdown open btn-group']//*[@role='menuitem']//span[text()='Deactivate']`)
define('MENU_DELETE', `//*[@class='table-actions-dropdown  dropdown open btn-group']//*[@role='menuitem']//span[text()='Delete']`)
define('MENU_ACTIVATE', `//*[@class='table-actions-dropdown  dropdown open btn-group']//*[@role='menuitem']//span[text()='Activate']`)
define('MENU_EDIT', `//*[@class='table-actions-dropdown  dropdown open btn-group']//*[@role='menuitem']//span[text()='Edit']`)
define('MENU_ASSIGN_RATE', `//*[@class='content']//*[@role='menu']//*/span[text()='Assign Rate']/..`);
define('DETAIL_FORM', `//*[@class='modal-title']`)

//-----------User---------------//
define('TABLE_ROW', `//*[@class='cellTable_row']`);
define('SELECT_FIELD', `//*[@class='modal-content']//*[select]`);
define('COLUNM_STATUS_ACTIVE', `(//*[@class='cellTable_cell'])[*]//span[text()='Active']`);
define('TEXTBOX_SEARCH', `//*[@role='toolbar']//child::input`);

//-----------Dynamic---------------//
define('HEADER_SURCHARGE_TABLE', `//*[@class='surcharge-list-container']//table//thead//span`);
define('TABLE_DYNAMIC', `//*[@class='surcharge-list' or @class='fare-list']//table`);
define('FORM_INPUT', `//*[@class='surcharge-form' or @class='fare-form']//form//input[@type='text' or @type='number']`);
define('FORM_BUTTON_ADD', `//*[@class='header-button-group']//button[@type='button']//span[text()="Add"]`);
define('FORM_INPUT_SEARCH', `//*[@class='header-button-group']//input[@type='text']`);
define('POPUP_NO', `//*[@class='btn-reset btn btn-default']`);
define('POPUP_SELECT_NO', `//*[@class='btn-cancel btn btn-default']`);
define('POPUP_YES', `//*[@class='btn-save ml-md btn btn-default']`);
define('POPUP_SELECT_YES', `//*[@class='btn-save mr-md btn btn-default']`);

define('HEADER_FARE_TABLE', `//*[@class='fare-list-container']//table//thead//span`);

//-----------Car---------------//
define('DETAIL_POPUP', `//*[@class='col-md-6 col-xs-12']`);

//-----------Toast notification---------------//
define('NOTIFI_TOAST', `//*[@class='noti-title']`);