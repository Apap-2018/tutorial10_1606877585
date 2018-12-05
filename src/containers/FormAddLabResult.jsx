import React from 'react';



export const FormAddLabResult = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <h2>Tambah Hasil Lab</h2>

            <div className="form-group">
                <label>Jenis<span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" name="jenis"  />
            </div>
            <div className="form-group">
                <label>Hasil<span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" name="hasil"  />
            </div>
            <div className="form-group">
                <label>Tanggal Pengajuan</label>
                <input type="date" className="form-control" name="tanggalPengajuan" />
            </div>



                <input type="hidden" name="id" value={props.pasien.id} />
            <button className="btn btn-success" value="submit">Update</button>
        </form>
    )
}