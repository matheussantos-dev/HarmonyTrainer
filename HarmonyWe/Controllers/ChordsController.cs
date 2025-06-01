using Microsoft.AspNetCore.Mvc;


namespace ChordsApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ChordsController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<string>> GetChords()
        {
            var chords = new List<string>
            {
                "C", "Cm", "C#", "C#m", "D", "Dm", "D#", "D#m",
                "E", "Em", "F", "Fm", "F#", "F#m", "G", "Gm",
                "G#", "G#m", "A", "Am", "A#", "A#m", "B", "Bm"
            };
            return Ok(chords);
        }
    }
}