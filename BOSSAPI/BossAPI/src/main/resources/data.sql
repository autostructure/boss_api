INSERT INTO dbo.expense_codes (id, Type) VALUES 
  (1, 'Common Carrier'),
  (2, 'Mileage & Parking'),
  (3, 'Rental Car'),
  (4, 'Per Diem'),
  (5, 'Misc Travel Expenses'),
  (6, 'Meeting Registration'),
  (7, 'Training, Tuition, Books'),
  (8, 'Base Salaries'),
  (9, 'Overtime'),
  (10, 'Lump Sum-A/L'),
  (11, 'Lump Sum-Comp'),
  (12, 'Lump Sum-Credit'),
  (13, 'Awards'),
  (14, 'Trailers'),
  (15, 'Campground Fees'),
  (16, 'LWOP'),
  (17, 'Cooperative Research'),
  (18, 'Computer'),
  (19, 'Rent, Guard Service, RWA'),
  (21, 'Telephone'),
  (22, 'Office Services'),
  (23, 'Office Supplies'),
  (24, 'Trucks - General'),
  (25, 'WCF Trucks-F.O.R.'),
  (26, 'WCF Trucks-Mileage'),
  (27, 'GSA Trucks'),
  (28, 'Leased Trucks'),
  (29, 'Maps and Photos'),
  (30, 'Wellness/Safety'),
  (32, 'Helicopters, Boats, Outfitters'),
  (33, 'Clearfield yard'),
  (34, 'ATV'),
  (35, 'Field Equipment'),
  (20, 'Building Space Agreements'),
  (37, 'TOS'),
  (39, 'Printing'),
  (40, 'Safety Boots');

INSERT INTO dbo.budget_object_codes (id, NAME) VALUES 
  (11, 'Salaries'),
  (21, 'Travel'),
  (23, 'Bldg ren'),
  (25, 'Flying c'),
  (26, 'Material'),
  (31, 'WCF/Truc'),
  (41, 'Agreemen'),
  (42, 'Claims');

INSERT INTO dbo.payment_codes (code, NAME) VALUES 
  ('182', 'SF-182'),
  ('BPA', 'Blanket Purch Agrmnt'),
  ('GSA', 'GSA Phone Order'),
  ('MGT', 'FS Fund Transfer'),
  ('PO', 'Purchase Order'),
  ('SAL', 'Salaries'),
  ('TV', 'Travel Voucher'),
  ('VI', 'VISA'),
  ('WCF', 'Working Capital Fund');

INSERT INTO dbo.activity_codes (code, NAME) VALUES 
  ('A', 'Analysis'),
  ('AD', 'Administration'),
  ('AL', 'Area Leader'),
  ('ALW', 'Aldo Leopold Wild. Res.'),
  ('ARE', 'AREBA'),
  ('BOI', 'Boise Basin'),
  ('E', 'External'),
  ('FA', 'Field Administration'),
  ('FC', 'Field-Coordination'),
  ('FF', 'FHM-Field'),
  ('FO', 'FHM-Office'),
  ('FP', 'Field-Production'),
  ('FQ', 'Field-Quality Control'),
  ('FS', 'Field Support'),
  ('HEB', 'Heber Arizona'),
  ('IF', 'Inventory-Field'),
  ('IM', 'Information Management'),
  ('IO', 'Inventory-Office'),
  ('IS', 'Information Systems'),
  ('MSO', 'MSO'),
  ('N', 'National'),
  ('NI', 'NIMS'),
  ('NS', 'Soils Project'),
  ('NV', 'FSVEG'),
  ('PIN', 'Pinyon Jay'),
  ('PM', 'Program Mgmt'),
  ('QR', 'Quality Rover'),
  ('S', 'Support Services'),
  ('SD', 'Spatial Data'),
  ('T', 'Techniques'),
  ('WO', 'Washinton Office');