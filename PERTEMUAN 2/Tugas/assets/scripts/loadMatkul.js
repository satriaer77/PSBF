const matkul = paramsUrl.get("matkul");

const dosenObject  = mataKuliah["dosen"];
const matkulObject = mataKuliah["daftar"];

if(matkul == null) 
{
    const daftarMatkul = document.getElementById("daftar-matkul");
    let getMatkul = ""; 

    for (matkulObj in matkulObject)
    {
        getMatkul+= `

        <div class="column col-3 col-lg-7 col-md-8 col-sm-12">
            <div class="card border-round">
                <div class="card-image"><img class="img-responsive border-round" src="../assets/images/${matkulObject[matkulObj]["cover"]}" alt="Penambangan Data"></div>
                <div class="card-header">
                  <div class="card-title h3 text-bold font-kanit">${matkulObject[matkulObj]["nama-matkul"]}</div>
                  <div class="card-subtitle text-gray font-kanit">${dosenObject[matkulObject[matkulObj]["dosen"]]["nama"]}</div>
                </div>
                <div class="card-body card-desc font-raleway">${matkulObject[matkulObj]["deskripsi"]}</div>
                <div class="card-footer font-kanit"><a class="btn btn-primary btn-lg border-round" href="detail-mata-kuliah.html?menu=matkul&matkul=${matkulObj}">Lihat Mata Kuliah</a></div>
            </div>
        </div>`;
   
    }
    console.log(getMatkul);
    daftarMatkul.innerHTML = getMatkul;
}
else
{
    // LOAD DETAIL MATKUL//
    const kodeMatkul       = document.getElementById("kode-matkul");
    const judulMatkul      = document.getElementById("judul-matkul");
    const coverMatkul      = document.getElementById("cover-matkul");
    const profilDosen      = document.getElementById("profil-dosen");
    const namaDosen        = document.getElementById("nama-dosen");
    const deskripsiDosen   = document.getElementById("deskripsi-dosen");
    const deskripsiMatkul  = document.getElementById("deskripsi-matkul");

    kodeMatkul.href           = url+"detail-mata-kuliah.html?menu=matkul&matkul="+matkul;
    kodeMatkul.innerHTML      = matkulObject[matkul]["nama-matkul"];
    judulMatkul.innerHTML     = matkulObject[matkul]["nama-matkul"];
    coverMatkul.src           = base_url+"/assets/images/"+matkulObject[matkul]["cover"];
    profilDosen.src           = base_url+"/assets/images/"+dosenObject[matkulObject[matkul]["dosen"]]["foto"];
    namaDosen.innerHTML       = dosenObject[matkulObject[matkul]["dosen"]]["nama"];
    deskripsiDosen.innerHTML  = dosenObject[matkulObject[matkul]["dosen"]]["deskripsi"];
    deskripsiMatkul.innerHTML = matkulObject[matkul]["deskripsi"];

}

