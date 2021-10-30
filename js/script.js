// toggle function

function toggle() {
    var x = document.getElementById("login-form");
    if (x.style.display === "none")
    {
        x.style.display = "block";
    } else {
        x.style.display = "none";
        }
}


var qualifications = ["2D Animation NC III", "2D Animation NC III (Superseded)", "2D Game Art Development NC III", "3D Animation NC III", "3D Animation NC III (Superseded)", "3D Game Art Development NC III", "5-Axis CNC Machine Operation NC III",
    "Able Seafarer Deck NC II (II-5)",
    "Able Seafarer Engine NC II (III-5)",
    "Agricultural Crops NC I",
    "Agricultural Crops Production NC II",
    "Agricultural Crops Production NC III",
    "Agricultural Machinery Operation NC II",
    "Agricultural Machinery Servicing (4-Wheel Tractor) NC III",
    "Agroenterpreneurship NC II",
    "Agroenterpreneurship NC III",
    "Agroenterpreneurship NC IV",
    "Air Duct Servicing NC II",
    "Animal Health Care and Management NC III",
    "Animal Production (Poultry-Chicken) NC II",
    "Animal Production (Ruminants) NC II",
    "Animal Production (Swine) NCII",
    "Animation NC II",
    "Animation NC II (Superseded)",
    "Aquaculture (Grow-Out Operation) NC II",
    "Aquaculture (Hatchery Operation) NC II	",
    "Aquaculture (Tilapia Culture) NCII",
    "Aquaculture NC II (Superseded)",
    "Artificial Insemination (Large Ruminants) NC II",
    "Artificial Insemination (Swine) NC II",
    "Assistive Rehabilitation Technology Services (Orthotics) NC II",
    "Assistive Rehabilitation Technology Services (Prosthetics) NC II",
    "Assistive Rehabilitation Technology Services (Wheelchair) NC II",
    "Attractions and Theme Parks Operations NC II",
    "Audio Production Services NC I",
    "Auto Body Painting Finishing NC I",
    "Auto Body Painting Finishing NC III",
    "Auto Engine Rebuilding NC II",
    "Automotive Body Repairing NC II",
    "Automotive Electrical Assembly NC II",
    "Automotive Electrical Assembly NC III",
    "Automotive Mechanical  Assembly NC III",
    "Automotive Mechanical Assembly NC II	",
    "Automotive Painting NC II",
    "Automotive Servicing (Chassis Repair) NC II",
    "Automotive Servicing (Electrical Repair) NC II",
    "Automotive Servicing (Engine Repair) NC II",
    "Automotive Servicing NC I",
    "Automotive Servicing NC I (Superseded)",
    "Automotive Servicing NC II (Superseded)",
    "Automotive Servicing NC III",
    "Automotive Servicing NC IV",
    "Automotive Wiring Harness Assembly NC II",
    "Bamboo Processing (Engineered-Bamboo) NC II",
    "Bamboo Production NC II",
    "Barangay Health Services NC II",
    "Barangay Health Services NC II (Superseded)",
    "Barbering NC II",
    "Barbering NC II (Superseded)",
    "Barista NC II",
    "Bartending NC II",
    "Beauty Care (Nail Enhancement Technology) NC III",
    "Beauty Care (Skin Care) Services NC II",
    "Beauty Care NC II (Superseded)",
    "Beauty Care NC III (Superseded)",
    "Beauty Care Services (Nail Care) NC III (Superseded)",
    "Beauty Care Services (Nail Services) NC II",
    "Beekeeping NC II",
    "Biogas Plant Installation NC III",
    "Biomedical Equipment Services NC II",
    "Bookkeeping NC III",
    "Bread and Pastry Production NC II",
    "Broadband Installation (Fixed Wireless Systems) NC II",
    "Cable TV Installation NC II",
    "Cable TV Operation and Maintenance NC III",
    "CAD/CAM Operation NC III",
    "Caregiving (Clients with Special Needs) NC II",
    "Caregiving (Elderly) NC II",
    "Caregiving (Grade Schooler to Adolescent ) NC II",
    "Caregiving (Newborn to Pre-Schooler) NC II",
    "Caregiving NC II (Superseded)",
    "Carpentry NC II",
    "Carpentry NC II (Superseded)",
    "Carpentry NC III",
    "Carpentry NC III (Superseded)",
    "Chemical Process Operations NC III",
    "CNC Electric Discharge Machine (EDM) Wire Cut Operation NC III",
    "CNC Lathe Machine Operation NC II",
    "CNC Lathe Machine Operation NC III",
    "CNC Milling Machine Operation NC II",
    "CNC Milling Machine Operation NC III",
    "Commercial Cooking NC III (Superseded)",
    "Commercial Cooking NC IV (Superseded)",
    "Computer Systems Servicing NC II",
    "Construction Lift Passenger/Material Elevator Operation NC II",
    "Construction Painting NC II",
    "Construction Painting NC III",
    "Consumer Electronics Servicing NC III",
    "Consumer Electronics Servicing NC IV",
    "Contact Center Services NC II",
    "Cookery NC II	",
    "COOPERATIVE DEVELOPMENT AND MANAGEMENT LEVEL IV",
    "Customer Services NC II",
    "Dental Hygiene Level IV",
    "Dental Hygiene Level IV (Superseded)",
    "Dental Laboratory Technology Services (Fixed Dentures/Restorations) NC II",
    "Dental Laboratory Technology Services (Removable Dentures/Appliances) NC II",
    "Dental Laboratory Technology Services NC I",
    "Dental Technology NC IV",
    "Die Designing NC IV",
    "Diesel Power Plant Maintenance NC III",
    "Diesel Power Plant Operation and Maintenance NC II",
    "Diesel Power Plant Operation and Maintenance NC III",
    "Domestic Work NC II",
    "Dressmaking NC II",
    "Driving (Articulated Vehicle) NC III",
    "Driving (Passenger Bus/Straight Truck) NC III",
    "Driving NC II",
    "Drying and Milling Plant Servicing NC III",
    "Electric Discharge Machine (EDM) Sinking Operation NC II",
    "Electric Power Distribution Line Construction NC II",
    "Electric Power Distribution Operation and Maintenance NC III",
    "Electric Power Distribution Operation and Maintenance NC IV",
    "Electrical Installation and Maintenance NC II",
    "Electrical Installation and Maintenance NC III",
    "Electrical Installation and Maintenance NC IV",
    "Electronic Products Assembly and Servicing NC II",
    "Electronics Back-end Operation NC II",
    "Electronics Front-of-line Operation NC II",
    "Electronics/Semiconductor Production Line Machine Servicing NC III",
    "Emergency Medical Services NC II",
    "Emergency Medical Services NC III",
    "Events Management Services NC III",
    "Fashion Design (Apparel) NC III",
    "Film and Video Postproduction NC III",
    "Fish Capture NC I",
    "Fish Capture NC II",
    "Fish Products Packaging NC II",
    "Fishing Gear Repair and Maintenance NC III",
    "FishportWharf Operations NC I",
    "Flux-Cored Arc Welding (FCAW) NC I",
    "Flux-Cored Arc Welding (FCAW) NC II",
    "Flux-Cored Arc Welding (FCAW) NC III",
    "Food and Beverage Services NC II",
    "Food and Beverage Services NC III",
    "Food and Beverage Services NC III (Superseded)",
    "Food and Beverage Services NC IV	",
    "Food and Beverage Services NC IV (Superseded)",
    "Food Processing NC I",
    "Food Processing NC I (Superseded)",
    "Food Processing NC II",
    "Food Processing NC III",
    "Food Processing NC IV",
    "Food Production (Professional Cookery) NC III",
    "Food Production (Professional Cookery) NC IV",
    "Footwear Making NC II",
    "Forging NC II",
    "Forging NC III",
    "Foundry Melting/Casting NC II",
    "Foundry Melting/Casting NC III",
    "Foundry Molding NC II",
    "Foundry Molding NC III",
    "Foundry Pattern Making NC II",
    "Foundry Patterngmaking NC III",
    "Front Office Services NC II",
    "Front Office Services NC III",
    "Front Office Services NC IV",
    "Furniture Making (Finishing) NC II",
    "Game Programming NC III",
    "Garbage Collection NC I",
    "Gas Metal Arc Welding (GMAW) NC I",
    "Gas Metal Arc Welding (GMAW) NC II",
    "Gas Metal Arc Welding (GMAW) NC III",
    "Gas Tungsten Arc Welding (GTAW) NC II",
    "Gas Tungsten Arc Welding (GTAW) NC IV",
    "Gas Welding NC I",
    "GAS Welding NC II",
    "Grains Production NC II",
    "Hairdressing NC II",
    "Hairdressing NC II (Superseded)",
    "Hairdressing NC III",
    "Hairdressing NC III (Superseded)",
    "Handloom Weaving (Upright) NC II",
    "Hard Disk Drive (HDD) Front-of-line (FOL) Operations NC II	",
    "Health Care Services NC II",
    "Heat Treatment NC II",
    "Heavy Equipment Operation (Rigid On-Highway Dump Truck) NC II",
    "Heavy Equipment Operation (Articulated Off-Highway Dump Truck) NC II",
    "Heavy Equipment Operation (Backhoe Loader) NC II",
    "Heavy Equipment Operation (Bulldozer) NC II",
    "Heavy Equipment Operation (Concrete Pump) NC II",
    "Heavy Equipment Operation (Container Stacker) NC II",
    "Heavy Equipment Operation (Crawler Crane) NC II (Superseded)",
    "Heavy Equipment Operation (Crawler Crane) NC III",
    "Heavy Equipment Operation (Forklift) NC II",
    "Heavy Equipment Operation (Forklift) NC II (Superseded)",
    "Heavy Equipment Operation (Gantry Crane) NC II (Superseded)",
    "Heavy Equipment Operation (Hydraulic Excavator) NC II",
    "Heavy Equipment Operation (Hydraulic Excavator) NC II (Superseded)",
    "Heavy Equipment Operation (Motor Grader) NC II",
    "Heavy Equipment Operation (Overhead and Gantry Crane) NC III	",
    "Heavy Equipment Operation (Paver) NC II",
    "Heavy Equipment Operation (Rigid Off - Highway Dump Truck) NC II",
    "Heavy Equipment Operation (Rigid On-Highway Dump Truck) NC II (Superseded)",
    "Heavy Equipment Operation (Road Roller) NC II",
    "Heavy Equipment Operation (Rough Terrain Crane) NC III",
    "Heavy Equipment Operation (Rough-Terrain Crane) NC II (Superseded)	",
    "Heavy Equipment Operation (Screed) NC I",
    "Heavy Equipment Operation (Tower Crane) NC II (Superseded)",
    "Heavy Equipment Operation (Tower Crane) NC III",
    "Heavy Equipment Operation (Transit Mixer) NC II",
    "Heavy Equipment Operation (Truck Mounted Crane) NC II (Superseded)",
    "Heavy Equipment Operation (Truck Mounted Crane) NC III",
    "Heavy Equipment Operation (Wheel Loader) NC II",
    "Heavy Equipment Servicing (Mechanical) NC II",
    "Hilot (Wellness Massage) NC II",
    "Horticulture NC III",
    "Housekeeping NC II",
    "Housekeeping NC III",
    "Housekeeping NC IV",
    "Ice Plant Refrigeration Servicing NC III",
    "Illustration NC II",
    "Instrumentation and Control Servicing NC II",
    "Instrumentation and Control Servicing NC III	",
    "Instrumentation and Control Servicing NC IV",
    "Jewelry Making (Fine Jewelry) NC II",
    "Jewelry Making (Fine Jewelry) NC III",
    "Laboratory and Metrology/Calibration Services NC II",
    "Laboratory and Metrology/Calibration Services NC III",
    "Land-Based Transport Refrigeration Servicing NC II",
    "Landscape Installation and Maintenance (Softscape) NC II",
    "Lifeguard Services NC II",
    "Lifeguard Services NC III",
    "Lighting for Live Performances NC II",
    "Line Construction (Electric Power Distribution) NC II (Superseded)",
    "Local Guiding Services NC II",
    "Machining NC I",
    "Machining NC I (Superseded)",
    "Machining NC II",
    "Machining NC III",
    "Marine Electricity NC II",
    "Masonry NC I",
    "Masonry NC I (Superseded)",
    "Masonry NC II",
    "Masonry NC II (Superseded)",
    "Masonry NC III",
    "Masonry NC III (Superseded)",
    "Massage Therapy NC II",
    "Mechanical Drafting NC I",
    "Mechatronics Servicing NC II",
    "Mechatronics Servicing NC III",
    "Mechatronics Servicing NC IV",
    "Medical Coding and Claims Processing NC III",
    "Medical Transcription NC II",
    "Metal Stamping NC II",
    "Microfinance Technology NC II",
    "Microfinance Technology NC IV",
    "Microinsurance Services (Mutual Benefit) NC II",
    "Milking Operation NC II",
    "Mobile Phones and Handheld Gadgets Servicing NC III",
    "Mold Designing NC IV",
    "Mold Making NC III	",
    "Moldmaking NC II",
    "Motorcycle/Small Engine Servicing NC II",
    "Multimodal Transport Operations and Logistics (Seafreight Import) Services NC II",
    "Multimodal Transport Operations and Logistics (Seafreight Import) Services NC III",
    "Multimodal Transport Operations and Logistics (Seafreight Import) Services NC IV",
    "Ophthalmic Lens Services NC II",
    "Organic Agriculture Production NC II",
    "Painting Machine Operation NC II",
    "Performing Arts (Ballroom Dancing) NC II",
    "Performing Arts (Dance) NC II",
    "Performing Arts (Song) NC II",
    "Pest Management (Vegetables) NC II",
    "Pharmacy Services NC III",
    "Photography NC II",
    "Pipefitting (Metallic) NC II",
    "Pipefitting NC II (Superseded)",
    "Plant Maintenance NC I",
    "Plastic Machine Operation NC II",
    "Plastic Machine Operation NC III",
    "Plumbing NC I	",
    "Plumbing NC II",
    "Plumbing NC III",
    "Press Machine Operation NC I",
    "Pressurized Irrigation System Installation and Maintenance NC II",
    "Process Inspection NC II	",
    "Process Inspection NC III",
    "Programming (.Net Technology) NC III",
    "Programming (JAVA) NC III",
    "Programming (JAVA) NC III (Superseded)",
    "Programming (Oracle Database) NC III",
    "Public Employment Services NC IV	",
    "PV System Design NC III	",
    "PV System Servicing NC III",
    "PV Systems Installation NC II",
    "Pyrotechnics NC II",
    "RAC Servicing (DomRAC) NC II (Superseded)",
    "RAC Servicing (PACU-CRE) NC III RAC Servicing (PACU-CRE) NC III (Superseded)",
    "Rating Forming Part of a Navigational Watch NC II (II-4)",
    "Rating Forming Part of an Engineering Watch NC II (III-4)",
    "Real Estate Services NC II",
    "Reinforcing Steel Works NC II	",
    "Rice Machinery Operations NC II",
    "Rigging NC I",
    "Rubber Processing NC II	",
    "Rubber Production NC II",
    "Rubber Production NC II (Superseded)",
    "Sanitary Landfill Operations NC II",
    "Sanitary Landfill Operations NC III",
    "Scaffold Erection NC II (Superseded)",
    "Scaffolding Works NC II (Supported Type Scaffold)",
    "Seaweed Production NC II",
    "Security Services NC I",
    "Security Services NC II",
    "Semiconductor Back-End Operation NC II",
    "Semiconductor Front-of-Line Operation NC II",
    "Shielded Metal Arc Welding (SMAW) NC I",
    "Shielded Metal Arc Welding (SMAW) NC II",
    "Shielded Metal Arc Welding (SMAW) NC III",
    "Shielded Metal Arc Welding (SMAW) NC IV",
    "Ships' Catering NC III (Ships' Cooks)",
    "Ship's Catering Services NC I",
    "Slaughtering Operations (Large Animal) NC II",
    "Slaughtering Operations (Swine) NC II",
    "Speed Limitation Device Servicing NC II",
    "Structural Erection NC II",
    "Submerged Arc Welding (SAW) NC I",
    "Submerged Arc Welding (SAW) NC II",
    "Sugarcane Production NC II",
    "System Formworks Installation NC II",
    "Tailoring NC II",
    "Technical Drafting NC II",
    "Telecom OSP and Subscriber Line Installation (Copper Cable/POTS and DSL) NC II	",
    "Telecom OSP Installation (Fiber Optic Cable) NC II	",
    "Tile Setting NC II",
    "Tile Setting NC II (Superseded)",
    "Tinsmithing (Automotive Manufacturing) NC II",
    "Tool and Die Making NC II",
    "Tour Packaging (Fit Ad Hoc Domestic) Services NC II",
    "Tourism Promotion Services NC II",
    "Trainers Methodology Level I (In-Company Trainer)",
    "Trainers Methodology Level I (Trainer/Assessor)",
    "Trainers Methodology Level II (Training Designer/Developer)",
    "Transmission Line Installation and Maintenance NC II",
    "Transmission Line Installation and Maintenance NC II (Superseded)",
    "Transmission Line Installation and Maintenance NC III",
    "Transmission Line Installation and Maintenance NC III (Superseded)",
    "Transmission Line Installation and Maintenance NC IV",
    "Transport RAC Servicing NC II (Superseded)",
    "Travel Services NC II",
    "Travel Services NC II (Superseded)",
    "Visual Graphic Design NC III",
    "Visual Graphic Design NC III (Superseded)",
    "Warehousing Services NC II",
    "Warehousing Services NC III",
    "Warehousing Services NC IV",
    "Web Development NC III",];

    // This is for the autocomplete of Qualifications

    function autocomplete(inp, arr) {
        var currentFocus;
        inp.addEventListener("input", function(e) {
            var a, b, i, val = this.value;
            closeAllLists();
            if (!val) {
                return false;
            }
            currentFocus = -1;

            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");

            this.parentNode.appendChild(a);

            for (i = 0; i < arr.length; i++) {

              if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {

                b = document.createElement("DIV");

                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

                    b.addEventListener("click", function(e) {
                    inp.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
                a.appendChild(b);
              }
            }
        });
        /*execute a function presses a key on the keyboard:*/
        inp.addEventListener("keydown", function(e) {
            var x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) {
              currentFocus++;
              addActive(x);
            } else if (e.keyCode == 38) {
              currentFocus--;
              addActive(x);
            } else if (e.keyCode == 13) {
              /*If the ENTER key is pressed, prevent the form from being submitted,*/
              e.preventDefault();
              if (currentFocus > -1) {

                if (x) x[currentFocus].click();
              }
            }
        });
        function addActive(x) {
          /*a function to classify an item as "active":*/
          if (!x) return false;
          /*start by removing the "active" class on all items:*/
          removeActive(x);
          if (currentFocus >= x.length) currentFocus = 0;
          if (currentFocus < 0) currentFocus = (x.length - 1);
          /*add class "autocomplete-active":*/
          x[currentFocus].classList.add("autocomplete-active");
        }
        function removeActive(x) {
          /*a function to remove the "active" class from all autocomplete items:*/
          for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
          }
        }
        function closeAllLists(elmnt) {
          /*close all autocomplete lists in the document,
          except the one passed as an argument:*/
          var x = document.getElementsByClassName("autocomplete-items");
          for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
            x[i].parentNode.removeChild(x[i]);
          }
        }
      }
      /*execute a function when someone clicks in the document:*/
      document.addEventListener("click", function (e) {
          closeAllLists(e.target);
      });
}
      
autocomplete(document.getElementById("qualifications"), qualifications);


// This is for the form validation

function validation() {
  Swal.fire({
    title: 'Great!',
    text: 'You are about to answer the Questionarre. Click okay to proceed',
    confirmButtonText: 'Proceed',
  })

}