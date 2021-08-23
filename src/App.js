import React, { useState } from 'react';
import Card from './components/card';
import DatePicker from 'react-date-picker';

function App(props) {

  const [tanggalLahir, setTanggallahir] = useState(new Date());
  const [nik, setNik] = useState();
  const [nama, setNama] = useState();
  const [tempatLahir, setTempatlahir] = useState();
  const [alamat, setAlamat] = useState();
  const [agama, setAgama] = useState();
  const [kelamin, setKelamin] = useState();
  
  
  const [tempatPemeriksaan, setTempatpemeriksaan] = useState();
  const [tanggalPemeriksaan, setTanggalpemeriksaan] = useState(new Date());
  const [bb, setBb] = useState();
  const [tb, setTb] = useState();
  const [goldar, setGoldar] = useState();
  const [tesbuta, setTesbuta] = useState();
  
  return (
    <div className="py-4">
      <div className="container">
        
        <div className="col mb-4">
          <div className="card">
            <h5 className="card-header">Data Pribadi</h5>
            <div className="card-body">

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-default">NIK</span>
                </div>
                <input type="number" value={nik} onChange={(e) => setNik(e.target.value)} className="form-control" placeholder="Hanya Angka" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-default">Nama</span>
                </div>
                <input type="text" value={nama} onChange={(e) => setNama(e.target.value.toUpperCase())} className="form-control" placeholder="-" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-default">Tempat/Tgl.Lahir</span>
                </div>
                <input type="text" value={tempatLahir} onChange={(e) => setTempatlahir(e.target.value.toUpperCase())}className="form-control" placeholder="-" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                <DatePicker onChange={setTanggallahir} value={tanggalLahir}/>
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-default">Jenis Kelamin</span>
                </div>
                <input type="text" value={kelamin} onChange={(e) => setKelamin(e.target.value.toUpperCase())} className="form-control" placeholder="PRIA / WANITA" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-default">Alamat</span>
                </div>
                <input type="text" value={alamat} onChange={(e) => setAlamat(e.target.value.toUpperCase())} className="form-control" placeholder="Tuliskan Alamat Dengan Lengkap Sesuai KTP" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-default">Agama</span>
                </div>
                <input type="text" value={agama} onChange={(e) => setAgama(e.target.value.toUpperCase())} className="form-control" placeholder="-" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-default">Asal Sekolah</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      


        <div className="col mb-4">
          <div className="card">
          <h5 className="card-header">Hasil Surat Kesehatan (isi sesuai dengan hasil)</h5>
            <div className="card-body">

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-default">Tempat/Tanggal Pemeriksaan</span>
                </div>
                <input type="text" value={tempatPemeriksaan} onChange={(e) => setTempatpemeriksaan(e.target.value.toUpperCase())}className="form-control" placeholder="PUSKESMAS SINGOSARI" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                <DatePicker onChange={setTanggalpemeriksaan} value={tanggalPemeriksaan}/>
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-default">Berat Badan</span>
                </div>
                <input type="number" value={bb} onChange={(e) => setBb(e.target.value)} className="form-control" placeholder="-" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                <div class="input-group-append">
                  <span class="input-group-text">Kg</span>
                </div>
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-default">Tinggi Badan</span>
                </div>
                <input type="number" value={tb} onChange={(e) => setTb(e.target.value)} className="form-control" placeholder="-" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                <div class="input-group-append">
                  <span class="input-group-text">cm</span>
                </div>
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-default">Golongan Darah</span>
                </div>
                <input type="text" value={goldar} onChange={(e) => setGoldar(e.target.value.toUpperCase())} className="form-control" placeholder="A / B / O" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
              </div>
              
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-default">Hasil Tes Buta Warna</span>
                </div>
                <input type="text" value={tesbuta} onChange={(e) => setTesbuta(e.target.value.toUpperCase())} className="form-control" placeholder="NORMAL / PARSIAL / TOTAL" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
              </div>
            </div>
          </div>
        </div>
      
        <div className="col mb-4">
          <div className="card">
            <h5 className="card-header">Upload Berkas</h5>
            <div className="card-body"></div>
          </div>
        </div>




      </div>
    </div>
  );
}

export default App;