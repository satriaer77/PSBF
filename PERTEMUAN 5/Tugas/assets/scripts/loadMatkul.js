const matkul = paramsUrl.get("matkul");

const dosenObject  = mataKuliah["dosen"];
const matkulObject = mataKuliah["daftar"];

if(matkul == null) 
{
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
                <div class="card-footer font-kanit"><a class="btn btn-primary border-round" href="detail-mata-kuliah.html?menu=matkul&matkul=${matkulObj}">Lihat Mata Kuliah</a></div>
            </div>
        </div>`;
   
    }
    $("#daftar-matkul").html(getMatkul);
}
else
{
    // LOAD DETAIL MATKUL//
    $("#kode-matkul").html(matkulObject[matkul]["nama-matkul"]);
    $("#kode-matkul").attr("href",url+"detail-mata-kuliah.html?menu=matkul&matkul="+matkul);
    $("#judul-matkul").html(matkulObject[matkul]["nama-matkul"]);
    $("#cover-matkul").attr("src", base_url+"/assets/images/"+matkulObject[matkul]["cover"]);
    $("#profil-dosen").attr("src",base_url+"/assets/images/"+dosenObject[matkulObject[matkul]["dosen"]]["foto"]);
    $("#nama-dosen").html(dosenObject[matkulObject[matkul]["dosen"]]["nama"]);
    $("#deskripsi-dosen").html(dosenObject[matkulObject[matkul]["dosen"]]["deskripsi"]);
    $("#deskripsi-matkul").html(matkulObject[matkul]["deskripsi"]);

}





