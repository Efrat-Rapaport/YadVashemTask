using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Entity
{
    public partial class Testimony
    {
 

    public string title { get; set; }
    public string tag { get; set; }
    public string url { get; set; }
    public string infoText { get; set; }

    public List<TranscriptSTR> transcriptSTR { get; set; }
  }
}
