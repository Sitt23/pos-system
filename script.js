
// --- ส่วนที่ 1: ประกาศตัวแปรส่วนกลาง ---
let currentTotal = 0; // ตัวแปรเก็บยอดรวม (ตัวเลขล้วน) เพื่อคำนวณเงินทอนให้แม่นยำ
let cart = [];

// --- ส่วนที่ 2: ฐานข้อมูลสินค้า (ภาษาลาว และห้ามใส่คอมม่าในราคา) ---
const productDatabase = [

    { barcode: "0001", name: "ນໍ້າຫົວເສືອຕຸກນ້ອຍ 350 ມລ", price: 5000, img:"https://www.shopping-d.com/cdn/shop/products/16_daa24bb9-84a6-4596-b54d-1d4fb927d348.png?v=1661667147&width=360"},
    { barcode: "0002", name: "ນໍ້າຫົວເສືອຕຸກກາງ 600 ມລ", price: 7000, img:"https://www.shopping-d.com/cdn/shop/products/12_743df90b-14bc-4104-8873-380d46fd57ce.png?v=1661666625&width=360"},
    { barcode: "0003", name: "ນໍ້າຫົວເສືອຕຸກໃຫຍ່ 1500 ມລ", price: 15000, img:"https://www.shopping-d.com/cdn/shop/products/11_4773d101-9fd9-4a3b-944e-7c28a4ca7faa.png?v=1661666561&width=360"},
    { barcode: "0004", name: "ນ້ຳດື່ມຫົວເສືອ 1500ml ແພັກ 6 ຕຸກ", price: 55000, img:"https://www.shopping-d.com/cdn/shop/products/TGHShrinkwrapMockup1500mlx6-MHI-2022400x400px.png?v=1733885168&width=360"},
    { barcode: "0005", name: "ດື່ມຫົວເສືອ 600ml ແພັກ 12 ຕຸກ", price: 55000, img:"https://www.shopping-d.com/cdn/shop/files/TGHShrinkwrapMockup600mlx12-MHI-2022400x400px.png?v=1733884938&width=360"},
    { barcode: "0006", name: "ດື່ມຫົວເສືອ 350ml l ແພັກ 24 ຕຸກ", price: 70000, img:"https://www.shopping-d.com/cdn/shop/products/TGHShrinkwrapMockup350mlx24-MHI-2022400x400px.png?v=1733885640&width=360"},
    { barcode: "0007", name: "ນ້ຳດື່ມຫົວເສືອ 235ml ແພັກ 48ຕຸກ", price: 65000, img:"https://www.shopping-d.com/cdn/shop/products/TGHShrinkwrapMockup235mlx24-MHI-2022400x400px.png?v=1657090094&width=360"},
    { barcode: "0008", name: "ເບຍລາວ Beerlao Original 640ml bottle per crate of 12 bottles", price: 290000, img:"https://www.shopping-d.com/cdn/shop/files/7_919fe7c4-b167-4365-b270-e01fd7e3e7d1.jpg?v=1715925282&width=990"},
    { barcode: "0009", name: "ເບຍລາວປ໋ອງໃຫຍ່ 500 ມລ", price: 30000, img:"https://www.shopping-d.com/cdn/shop/files/4_018e1994-be0d-4689-ab94-b2d9c67f6640.jpg?v=1715925441&width=990"},
    { barcode: "0010", name: "ເບຍລາວ ອໍຮິຈິນໍລ 500ml ແກັດ 24 ປ໋ອງ", price: 450000, img:"https://www.shopping-d.com/cdn/shop/files/9_1fc3dff4-8412-48e1-a102-1efde0c4c579.jpg?v=1715925336&width=990"},
    { barcode: "0011", name: "ເບຍລາວປ໋ອງນ້ອຍ 330ml", price: 18000, img:"https://www.shopping-d.com/cdn/shop/files/2_216abce2-76af-4a03-9bce-1931f930fe8c.jpg?v=1715925559&width=990"},
    { barcode: "0012", name: "ເບຍລາວ Original 330ml can per box of 24 cans", price: 330000, img:"https://www.shopping-d.com/cdn/shop/files/6_c9f9dfc0-93cd-49ca-9b24-dad93e217038.jpg?v=1715925366&width=990"},
    { barcode: "0013", name: "ເບຍລາວແກ້ວໃຫຍ່ 640 ມລ", price: 24000, img:"https://www.shopping-d.com/cdn/shop/files/1_c727713e-87fc-4c06-b56f-0e6adbc234f7.jpg?v=1715925481&width=990"},
    { barcode: "0014", name: "ໂສດາລາວແກ້ວ 320ມລ", price: 12000, img:"https://www.shopping-d.com/cdn/shop/files/Untitled-1_4a29952d-f290-449a-8ec7-70b0c1312e77.jpg?v=1700375306&width=990"},
    { barcode: "0015", name: "Heineken Beer 640ml Bottle", price: 32000, img:"https://www.shopping-d.com/cdn/shop/files/HeinekenBeer650mlBottle.png?v=1734336496&width=990"},
    { barcode: "0016", name: "Heineken Beer 330ml Bottle Boxes of 24 bottles", price: 450000, img:"https://www.shopping-d.com/cdn/shop/products/HeinekenBeer330mlBottleBoxesof24bottles.png?v=1635932173&width=990"},
    { barcode: "0017", name: "Heineken Beer 320ml Can", price: 22000, img:"https://www.shopping-d.com/cdn/shop/files/HeinekenBeer500mlCan.png?v=1734336447&width=990"},
    { barcode: "0018", name: "Heineken Beer 320ml Boxes of 24 Cans", price: 430000, img:"https://www.shopping-d.com/cdn/shop/products/HeinekenBeer500mlBoxesof12Cans.png?v=1635933124&width=990"},
    { barcode: "0019", name: "Heineken Beer 250ml Boxes of 24 cans", price: 420000, img:"https://www.shopping-d.com/cdn/shop/products/HeinekenBeer330mlBoxesof24cans.png?v=1635931939&width=990"},
    { barcode: "0020", name: "Heineken Beer 250ml cans", price: 18000, img:"https://www.shopping-d.com/cdn/shop/files/HeinekenBeer330mlCan.png?v=1734336202&width=990"},

    { barcode: "00001", name: "ຄະນໍກ້ອນ ລົດຕົ້ມຍຳ ຂະໜາດ 20 ກຮາມ", price: 12000, img:"https://www.shopping-d.com/cdn/shop/files/KnorrCubesTomYamFlavour20g3000.png?v=1734143657&width=990"},
    { barcode: "00002", name: "ຄະນໍຊຸບກ້ອນໝູ ຂະໜາດ 20 ກຮາມ", price: 12000, img:"https://www.shopping-d.com/cdn/shop/files/KnorrCubesSoupPorkFlavour20g3000.png?v=1734079788&width=990"},
    { barcode: "00003", name: "ຄະນໍກ້ອນໄກ່ ຂະໜາດ 20 ກຮາມ", price: 12000, img:"https://www.shopping-d.com/cdn/shop/products/01_ab84abc4-15b1-4d1c-855f-726a6eca24d8.jpg?v=1660448525&width=990"},
    { barcode: "00004", name: "ຄະນໍຊຸບກ້ອນ ລົດເນື້ອ ຂະໜາດ 20ກຮາມ", price: 15000, img:"https://www.shopping-d.com/cdn/shop/products/8850144206415_19-04-2021.jpg?v=1678606502&width=990"},
    { barcode: "00005", name: "FF ຂະໜົມອົບກອຍບລົດໝາກເລັ່ນ 65g", price: 18000, img:"https://www.shopping-d.com/cdn/shop/files/FFCrispyPastriesTomatoFlavoredBag65g_8850412374167_7000.png?v=1733990179&width=990"},
    { barcode: "00006", name: "ເອັສເອັສ ສະຕິກ ລົດສາຫລ່າຍໂນຮິມາກິ 65g", price: 17000, img:"https://www.shopping-d.com/cdn/shop/products/FFStixSeaweedNoriMakiFlavouredCrackerBag65g_8850412374785_7000.png?v=1594691444&width=990"},
    { barcode: "00007", name: "ເລ ຄາສສິກ ມັນຝຮັ່ງອົບກອບ ລົດໂນຮິສາຫລ່າຍ 50g", price: 20000, img:"https://www.shopping-d.com/cdn/shop/products/LaysClassicPotatoChipsNoriSeaweedFlavorBags50g_8850718801886_7000.png?v=1594700450&width=990"},
    { barcode: "00008", name: "ເລ ຄາສສິກ ມັນຝຮັ່ງທອດກອບ ອໍຮິຈິນໍ Bags 50g", price: 20000, img:"https://www.shopping-d.com/cdn/shop/products/LaysClassicPotatoChipsOriginalFlavorBags50g_8850718801473_7000.png?v=1594700488&width=990"},
    { barcode: "00009", name: "ເລ ລ໋ອກມັນຝຮັ່ງທອດກອບ ເອັກຕຮາລົດບາບີຄີວ 50g", price: 20000, img:"https://www.shopping-d.com/cdn/shop/products/LaysRockPotatoChipsExtraBarbecueFlavorbags50g_88850718801442_7000.png?v=1594701449&width=990"},
    { barcode: "00010", name: "ເລ ຄາສສິກ ມັນຝຮັ່ງທອດກອບ ຊາວຄຮີມ & ຫົວຫອມ 50g", price: 20000, img:"https://www.shopping-d.com/cdn/shop/products/LaysClassicPotatoChipsSourCream_OnionFlavorBags50g_8850718801497_7000.png?v=1594700682&width=990"},
    { barcode: "00011", name: "ສາມພານ ຂະໜົມອົບກອບສາລີປີ້ງ 60g", price: 18000, img:"https://www.shopping-d.com/cdn/shop/files/SampranBrandBakedCornSnackBag60g_8850412374211_7000.png?v=1733986731&width=990"},
    { barcode: "00002", name: "ນໍ້າຫົວເສືອຕຸກກາງ 600 ມລ", price: 7000, img:""},
    { barcode: "00002", name: "ນໍ້າຫົວເສືອຕຸກກາງ 600 ມລ", price: 7000, img:""},
    { barcode: "00002", name: "ນໍ້າຫົວເສືອຕຸກກາງ 600 ມລ", price: 7000, img:""},
    { barcode: "00002", name: "ນໍ້າຫົວເສືອຕຸກກາງ 600 ມລ", price: 7000, img:""},
    { barcode: "00002", name: "ນໍ້າຫົວເສືອຕຸກກາງ 600 ມລ", price: 7000, img:""},
    { barcode: "00002", name: "ນໍ້າຫົວເສືອຕຸກກາງ 600 ມລ", price: 7000, img:""},
    { barcode: "00002", name: "ນໍ້າຫົວເສືອຕຸກກາງ 600 ມລ", price: 7000, img:""},
    { barcode: "00002", name: "ນໍ້າຫົວເສືອຕຸກກາງ 600 ມລ", price: 7000, img:""},
    { barcode: "00002", name: "ນໍ້າຫົວເສືອຕຸກກາງ 600 ມລ", price: 7000, img:""},







];

// --- ส่วนที่ 3: ระบบตรวจสอบการล็อกอิน (ดึงมาจาก Code เก่า) ---
function checkLogin() {
    const empName = sessionStorage.getItem('empName');
    if (!empName) {
        window.location.href = "login.html";
    } else {
        document.getElementById('empNameDisplay').innerText = empName;
    }
}

function logout() {
    sessionStorage.clear();
    window.location.href = "login.html";
}

// --- ส่วนที่ 4: เพิ่มสินค้าเข้าตะกร้า ---
function addFromInputs() {
    const barcodeInput = document.getElementById('barcodeInput');
    const nameInput = document.getElementById('nameInput');
    
    const barcode = barcodeInput.value.trim();
    const name = nameInput.value.trim().toLowerCase();
    
    let product = null;

    // 1. ถ้าใส่ Barcode ให้หาด้วย Barcode เป็นหลักก่อน
    if (barcode !== "") {
        product = productDatabase.find(p => p.barcode === barcode);
    } 
    
    // 2. ถ้าไม่ได้ใส่ Barcode หรือหาไม่เจอ แต่มีการพิมพ์ชื่อ ให้หาด้วยชื่อ
    if (!product && name !== "") {
        product = productDatabase.find(p => p.name.toLowerCase().includes(name));
    }

    if (product) {
        const existingItem = cart.find(item => item.barcode === product.barcode);
        if (existingItem) {
            existingItem.qty++; // ถ้าเจอตัวเดิม ให้เพิ่มจำนวน
        } else {
            cart.push({ ...product, qty: 1 }); // ถ้าเป็นตัวใหม่ ให้เพิ่มแถวใหม่
        }
        updateCartDisplay();
    } else {
        alert("ບໍ່ພົບສິນຄ້າທີ່ທ່ານຄົ້ນຫາ! ");
    }

    // ล้างค่าและโฟกัสกลับไปที่ช่อง Barcode
    barcodeInput.value = '';
    nameInput.value = '';
    barcodeInput.focus();
}

// --- ส่วนที่ 5: อัปเดตตารางและยอดรวม (ใช้ระบบคำนวณที่แม่นยำ) ---
function updateCartDisplay() {
    const tbody = document.getElementById('cartBody');
    tbody.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        
        tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td><img src="${item.img}" class="product-img"></td>
                <td>${item.name}</td>
                <td>${item.price.toLocaleString()} ກີບ</td>
                <td><input type="number" class="qty-input" value="${item.qty}" min="1" onchange="updateQty('${item.barcode}', this.value)"></td>
                <td>${itemTotal.toLocaleString()} ກີບ</td>
                <td><button onclick="removeItem('${item.barcode}')" class="btn-delete">ລົບ</button></td>
            </tr>
        `;
    });

    currentTotal = total; // เก็บค่าตัวเลขจริงไว้ในตัวแปรกลาง
    document.getElementById('totalPrice').innerText = total.toLocaleString();
    document.getElementById('changePrice').innerText = '0';
    document.getElementById('cashInput').value = '';
}

// --- ส่วนที่ 6: คำนวณเงินทอน (ใช้ currentTotal เพื่อป้องกัน Error จากคอมม่า) ---
function calculateChange() {
    const cash = parseFloat(document.getElementById('cashInput').value);
    
    if (isNaN(cash) || cash < currentTotal) {
        alert("ຍອດເງິນຮັບມາບໍ່ພໍ ຫຼື ຂໍ້ມູນບໍ່ຖືກຕ້ອງ");
        return;
    }

    const change = cash - currentTotal;
    document.getElementById('changePrice').innerText = change.toLocaleString();
}

// --- ส่วนที่ 7: ระบบพิมพ์ใบเสร็จ (ดึงมาจาก Code เก่าและปรับปรุงให้สวยงาม) ---
function prepareReceipt() {
    const cash = document.getElementById('cashInput').value;
    const change = document.getElementById('changePrice').innerText;
    const empId = sessionStorage.getItem('empId');
    const empName = sessionStorage.getItem('empName');
    
    if (cart.length === 0) { alert("ບໍ່ມີສິນຄ້າໃນກະຕ່າ"); return; }
    if (!cash || parseFloat(cash) < currentTotal) { alert("ກະລຸນາປ້ອນເງິນຮັບມາໃຫ້ຖືກຕ້ອງ"); return; }

    const now = new Date();
    const dateTimeStr = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();

    const receiptContent = `
        <div id="receiptModal" style="max-width:300px; margin:auto; padding:20px; font-family:'Phetsarath OT', 'Times New Roman', serif; border:1px solid #ddd; background:white;">
            <div style="text-align:center; font-weight:bold; font-size:1.2rem;">ບຸນມາ POS</div>
            <div style="text-align:center; font-size:0.8rem; border-bottom:1px dashed #333; padding-bottom:10px;">ຂອບໃຈທີ່ໃຊ້ບໍລິການ</div>
            
            <div style="font-size:0.8rem; margin:10px 0;">
                ວັນທີ: ${dateTimeStr}<br>
                ພະນັກງານ: ${empName} (${empId})
            </div>
            
            <table style="width:100%; font-size:0.8rem; border-bottom:1px dashed #333; margin-bottom:10px;">
                <thead style="text-align:left;">
                    <tr><th>ລາຍການ</th><th width="20%">ຈຳນວນ</th><th width="30%">ລວມ</th></tr>
                </thead>
                <tbody>
                    ${cart.map(item => `<tr><td>${item.name}</td><td>${item.qty}</td><td>${(item.price * item.qty).toLocaleString()}</td></tr>`).join('')}
                </tbody>
            </table>
            
            <div style="text-align:right; font-size:1rem; font-weight:bold;">ຍອດລວມ: ${currentTotal.toLocaleString()} ກີບ</div>
            <div style="text-align:right; font-size:0.9rem;">ຮັບເງິນ: ${parseFloat(cash).toLocaleString()} ກີບ</div>
            <div style="text-align:right; font-size:1rem; font-weight:bold; color:#1a73e8; margin-bottom:15px;">ເງິນທອນ: ${change} ກີບ</div>
            
            <div style="text-align:center; font-size:0.8rem; border-top:1px dashed #333; padding-top:10px;">
                ** ກະລຸນາກວດສອບເງິນທອນ **<br>
                www.boonma-pos.com
            </div>
            <button onclick="window.print()" class="no-print" style="width:100%; margin-top:20px; padding:10px; background:#28a745; color:white; border:none; border-radius:5px; cursor:pointer;">ຢືນຢັນການພິມ</button>
            <button onclick="closeReceipt()" class="no-print" style="width:100%; margin-top:5px; padding:10px; background:#f4f4f4; border:1px solid #ddd; border-radius:5px; cursor:pointer;">ປິດ</button>
        </div>
    `;

    const modalDiv = document.createElement('div');
    modalDiv.id = 'receiptWrapper';
    modalDiv.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); display:flex; justify-content:center; align-items:center; z-index:1000;';
    modalDiv.innerHTML = receiptContent;
    document.body.appendChild(modalDiv);
}

function closeReceipt() {
    const wrapper = document.getElementById('receiptWrapper');
    if (wrapper) document.body.removeChild(wrapper);
}

// --- ฟังก์ชันอื่นๆ ---
function updateQty(barcode, newQty) {
    const item = cart.find(item => item.barcode === barcode);
    if (item) item.qty = parseInt(newQty) || 1;
    updateCartDisplay();
}

function removeItem(barcode) {
    cart = cart.filter(item => item.barcode !== barcode);
    updateCartDisplay();
}
// --- ฟังก์ชันแสดง QR Code สำหรับสแกนจ่าย ---
function showQRCode() {
    if (cart.length === 0) {
        alert("ບໍ່ມີສິນຄ້າໃນກະຕ່າ!");
        return;
    }

    // สร้างเนื้อหาที่จะโชว์ใน Pop-up
    const qrContent = `
        <div id="qrModal" style="max-width:350px; margin:auto; padding:20px; font-family:'Phetsarath OT', serif; border-radius:15px; background:white; text-align:center; position:relative;">
            <h3 style="color:#2d3436;">ສະແກນຈ່າຍເງິນ</h3>
            <p style="font-size:1.2rem; font-weight:bold; color:#1a73e8;">ຍອດລວມ: ${currentTotal.toLocaleString()} ກີບ</p>
            
            <img src="my-qr.jpeg" style="width:200px; height:200px; margin:15px 0; border: 5px solid #f1f2f6; border-radius:10px;" alt="QR Code">
            
            <p style="font-size:0.8rem; color:#636e72;">ກະລຸນາກວດສອບຊື່ບັນຊີ: <b>ບຸນມາ POS</b></p>
            
            <button onclick="closeQR()" style="width:100%; margin-top:15px; padding:12px; background:#e17055; color:white; border:none; border-radius:8px; cursor:pointer; font-size:1rem;">ປິດຫນ້າຕ່າງ</button>
        </div>
    `;

    // สร้างพื้นหลังสีดำจางๆ (Overlay)
    const qrWrapper = document.createElement('div');
    qrWrapper.id = 'qrWrapper';
    qrWrapper.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.7); display:flex; justify-content:center; align-items:center; z-index:2000;';
    qrWrapper.innerHTML = qrContent;
    document.body.appendChild(qrWrapper);
}

// ฟังก์ชันปิดหน้าต่าง QR
function closeQR() {
    const wrapper = document.getElementById('qrWrapper');
    if (wrapper) document.body.removeChild(wrapper);
}

// เรียกใช้งานตรวจสอบการล็อกอินเมื่อหน้าจอโหลด
window.onload = checkLogin;
function printReceipt() {
    // 1. จัดรูปแบบข้อความที่จะพิมพ์ (ใช้ภาษาลาวได้)
    let text = "      Bounma POS\n";
    text += "--------------------------------\n";
    text += "ລາຍການสินค้า: " + "เบียร์ลาว" + "\n"; // ตรงนี้ดึงจากตัวแปรของคุณ
    text += "ราคารวม: " + "50,000" + " Kip\n";
    text += "--------------------------------\n";
    text += "    ขอบใจที่ใช้บริการ\n\n\n";

    // 2. ส่งไปที่แอป RawBT (ใช้คำสั่งพิเศษ rawbt:)
    let rawbtUrl = "rawbt:base64," + btoa(unescape(encodeURIComponent(text)));
    window.location.href = rawbtUrl;
}
function printReceipt() {
    // ดึงค่าราคารวมจากหน้าจอ (สมมติว่าคุณใช้ id="total-price")
    let total = document.getElementById("total-price").innerText;

    // สร้างเนื้อหาใบเสร็จแบบ HTML เพื่อส่งให้ RawBT วาดเป็นรูปภาพ
    const receiptHtml = `
    <html>
    <body style="width: 300px; padding: 10px; font-family: 'Arial', sans-serif;">
        <div style="text-align: center;">
            <h2 style="margin: 0;">Bounma POS</h2>
            <p style="margin: 5px 0;">--------------------------------</p>
        </div>
        <div style="font-size: 16px;">
            <p><b>ລາຍການ:</b> เบียร์ลาว</p>
            <p><b>ราคารวม:</b> ${total} Kip</p>
        </div>
        <div style="text-align: center;">
            <p style="margin: 5px 0;">--------------------------------</p>
            <p style="font-size: 14px;">ขอบใจที่ใช้บริการ</p>
            <br>
        </div>
    </body>
    </html>
    `;

    // ส่งข้อมูลไปที่แอป RawBT โดยสั่งให้มัน "วาดเป็นภาพ" (rawbt:html)
    // วิธีนี้จะทำให้ภาษาลาวออกมาสวยงามแน่นอน
    const rawbtUrl = "rawbt:html," + encodeURIComponent(receiptHtml);
    window.location.href = rawbtUrl;
}
