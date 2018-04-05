alter table shipment add column invoice_number VARCHAR(255)  null;
alter table shipment add column invoice_creation_date DATE not null;
alter table shipment add column pre_carriage double not null;
alter table shipment add column export_insurance double not null;
alter table shipment add column flight_price double not null;
alter table shipment add column import_insurance double not null;
alter table shipment add column  import_customs_clearance double not null;
alter table shipment add column   on_carraige double not null;
alter table shipment add column   management_fee double not null;
alter table shipment add column  service_fee double not null;
alter table shipment add column  discount double not null;



